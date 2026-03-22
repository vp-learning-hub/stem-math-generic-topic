// MathQuest — localStorage Manager
// Handles all persistence across sessions

const STORAGE_KEY = 'mathQuestProgress';
const SESSION_CARDS = 30;

const Storage = {

  // Initialize or load existing progress
  init() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fresh = this.createNewUser();
      this.save(fresh);
      return fresh;
    }
    try {
      const data = JSON.parse(raw);
      // Migrate: ensure lockMode preference exists for older saves
      if (data.preferences && data.preferences.lockMode === undefined) {
        data.preferences.lockMode = true;
        this.save(data);
      }
      return data;
    } catch (e) {
      console.warn('Corrupted save data, resetting...', e);
      const fresh = this.createNewUser();
      this.save(fresh);
      return fresh;
    }
  },

  // Save entire progress object
  save(data) {
    data.lastSaved = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  // Get current progress without initializing
  get() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  },

  // Create brand new user
  createNewUser() {
    const firstTopic = MathCurriculum.progression[0];
    return {
      userId: this._uuid(),
      createdAt: new Date().toISOString(),
      lastSaved: new Date().toISOString(),

      // Current learning position
      currentTopic: firstTopic,
      currentCardIndex: 0,

      // Session tracking
      session: {
        startedAt: new Date().toISOString(),
        cardsViewed: 0,
        cardsSinceLastFact: 0,
        correctThisSession: 0,
        attemptsThisSession: 0,
        sessionCardCount: 0
      },

      // Lifetime stats
      stats: {
        totalCardsCompleted: 0,
        totalCorrect: 0,
        totalAttempts: 0,
        streakCurrent: 0,
        streakBest: 0,
        totalTimeMinutes: 0,
        totalPoints: 0,
        sessionsCompleted: 0
      },

      // Per-topic progress
      topicProgress: this._initTopicProgress(),

      // Achievements
      achievements: {
        earned: [],
        pending: [],
        displayed: []
      },

      // Preferences
      preferences: {
        theme: 'space',
        soundEnabled: false,
        animationsEnabled: true,
        lockMode: true        // true = sequential progression, false = free access
      }
    };
  },

  // Build empty topic progress for all topics
  _initTopicProgress() {
    const progress = {};
    MathCurriculum.progression.forEach((topicId, index) => {
      progress[topicId] = {
        status: index === 0 ? 'unlocked' : 'locked',
        score: 0,
        cardsCompleted: 0,
        cardsTotal: MathCurriculum.topics[topicId].cards.length,
        correctAnswers: 0,
        totalAttempts: 0,
        completedAt: null,
        startedAt: null
      };
    });
    return progress;
  },

  // Unlock next topic if threshold met
  checkAndUnlockNext(data, topicId) {
    const topicProgress = data.topicProgress[topicId];
    const progression = MathCurriculum.progression;
    const currentIndex = progression.indexOf(topicId);

    // Calculate score
    if (topicProgress.totalAttempts > 0) {
      topicProgress.score = Math.round(
        (topicProgress.correctAnswers / topicProgress.totalAttempts) * 100
      );
    }

    // Check if topic complete
    const topic = MathCurriculum.topics[topicId];
    const practiceCards = topic.cards.filter(c => c.type === 'practice');
    if (topicProgress.correctAnswers >= Math.ceil(practiceCards.length * 0.5)) {
      topicProgress.status = 'completed';
      topicProgress.completedAt = new Date().toISOString();

      // Only unlock next topic when in locked (sequential) mode
      if (data.preferences.lockMode && currentIndex < progression.length - 1) {
        const nextTopic = progression[currentIndex + 1];
        if (data.topicProgress[nextTopic].status === 'locked') {
          data.topicProgress[nextTopic].status = 'unlocked';
        }
      }
    }
  },

  // Record a card answer
  recordAnswer(data, isCorrect, points) {
    data.stats.totalAttempts++;
    data.session.attemptsThisSession++;

    const topicId = data.currentTopic;
    data.topicProgress[topicId].totalAttempts++;

    if (isCorrect) {
      data.stats.totalCorrect++;
      data.stats.streakCurrent++;
      data.stats.totalPoints += points;
      data.session.correctThisSession++;
      data.topicProgress[topicId].correctAnswers++;

      if (data.stats.streakCurrent > data.stats.streakBest) {
        data.stats.streakBest = data.stats.streakCurrent;
      }
    } else {
      data.stats.streakCurrent = 0;
    }

    this.save(data);
  },

  // Mark a card as viewed/completed
  recordCardComplete(data, cardType) {
    data.stats.totalCardsCompleted++;
    data.session.cardsViewed++;
    data.session.sessionCardCount++;

    if (cardType !== 'fact') {
      data.session.cardsSinceLastFact++;
      data.topicProgress[data.currentTopic].cardsCompleted++;
    } else {
      data.session.cardsSinceLastFact = 0;
    }

    // Advance card index
    const topic = MathCurriculum.topics[data.currentTopic];
    if (cardType !== 'fact') {
      data.currentCardIndex++;
      // If we've gone through all cards, cycle back to start
      if (data.currentCardIndex >= topic.cards.length) {
        data.currentCardIndex = 0;
        this.checkAndUnlockNext(data, data.currentTopic);
      }
    }

    this.save(data);
  },

  // Switch to a new topic
  switchTopic(data, topicId) {
    // Respect lock gate only when lockMode is on
    if (data.topicProgress[topicId].status === 'locked' && data.preferences.lockMode) return false;
    data.currentTopic = topicId;
    data.currentCardIndex = 0;
    data.session.cardsSinceLastFact = 0;
    if (!data.topicProgress[topicId].startedAt) {
      data.topicProgress[topicId].startedAt = new Date().toISOString();
      data.topicProgress[topicId].status = 'in-progress';
    }
    this.save(data);
    return true;
  },

  // Toggle between locked (sequential) and free (open) mode
  toggleLockMode(data) {
    data.preferences.lockMode = !data.preferences.lockMode;

    if (!data.preferences.lockMode) {
      // Switching to free mode: unlock all currently locked topics
      MathCurriculum.progression.forEach(topicId => {
        if (data.topicProgress[topicId].status === 'locked') {
          data.topicProgress[topicId].status = 'unlocked';
        }
      });
    } else {
      // Switching back to locked mode:
      // Keep completed/in-progress/attempted topics accessible;
      // re-lock only untouched topics beyond the current frontier.
      const progression = MathCurriculum.progression;
      // Find the index of the last completed topic
      let frontierIndex = -1;
      progression.forEach((topicId, index) => {
        if (data.topicProgress[topicId].status === 'completed') {
          frontierIndex = index;
        }
      });
      // Topics beyond frontier+1 with zero attempts get locked again
      progression.forEach((topicId, index) => {
        const tp = data.topicProgress[topicId];
        if (
          index > frontierIndex + 1 &&
          tp.correctAnswers === 0 &&
          tp.totalAttempts === 0 &&
          tp.status !== 'completed' &&
          tp.status !== 'in-progress'
        ) {
          tp.status = 'locked';
        }
      });
    }

    this.save(data);
  },

  // Start new session
  startSession(data) {
    data.session = {
      startedAt: new Date().toISOString(),
      cardsViewed: 0,
      cardsSinceLastFact: data.session.cardsSinceLastFact || 0,
      correctThisSession: 0,
      attemptsThisSession: 0,
      sessionCardCount: 0
    };
    data.stats.sessionsCompleted++;
    this.save(data);
  },

  // Reset all progress
  reset() {
    localStorage.removeItem(STORAGE_KEY);
    return this.init();
  },

  // Generate UUID v4
  _uuid() {
    if (crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
};
