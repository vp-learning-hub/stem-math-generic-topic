// MathQuest — Achievements System

const AchievementsData = [
  { id: 'first-correct',    name: 'First Steps!',       icon: '⭐', description: 'Got your first correct answer!',         trigger: { type: 'total-correct', value: 1 },           celebration: { message: '⭐ You got your first correct answer! The journey begins!', animation: 'pop' } },
  { id: 'streak-3',         name: 'On a Roll!',         icon: '🔥', description: '3 correct answers in a row',              trigger: { type: 'streak', value: 3 },                  celebration: { message: '🔥 3 in a row! You\'re on a roll!', animation: 'pulse' } },
  { id: 'streak-5',         name: 'On Fire!',           icon: '🚀', description: '5 correct answers in a row',              trigger: { type: 'streak', value: 5 },                  celebration: { message: '🚀 5 in a row! You\'re unstoppable!', animation: 'fireworks' } },
  { id: 'streak-10',        name: 'Unstoppable!',       icon: '💥', description: '10 correct answers in a row',             trigger: { type: 'streak', value: 10 },                 celebration: { message: '💥 10 in a row! You\'re a math genius!', animation: 'fireworks' } },
  { id: 'streak-25',        name: 'Genius Mode!',       icon: '🧠', description: '25 correct answers in a row',             trigger: { type: 'streak', value: 25 },                 celebration: { message: '🧠 25 in a row! Genius level unlocked!', animation: 'fireworks' } },
  { id: 'topic-complete-1', name: 'Topic Master!',      icon: '🏆', description: 'Completed your first topic',              trigger: { type: 'topics-completed', value: 1 },        celebration: { message: '🏆 Topic complete! You\'re a topic master!', animation: 'fireworks' } },
  { id: 'topic-complete-3', name: 'Triple Crown!',      icon: '👑', description: 'Completed 3 topics',                     trigger: { type: 'topics-completed', value: 3 },        celebration: { message: '👑 3 topics done! A triple crown!', animation: 'fireworks' } },
  { id: 'topic-complete-5', name: 'Math Explorer!',     icon: '🗺️', description: 'Completed 5 topics',                     trigger: { type: 'topics-completed', value: 5 },        celebration: { message: '🗺️ Halfway through the math universe!', animation: 'fireworks' } },
  { id: 'all-complete',     name: 'Math Astronaut!',    icon: '👨‍🚀', description: 'Completed ALL 10 topics!',               trigger: { type: 'topics-completed', value: 10 },       celebration: { message: '👨‍🚀 You\'ve mastered ALL of math through Grade 8!', animation: 'fireworks' } },
  { id: 'cards-25',         name: 'Card Collector',     icon: '📚', description: 'Completed 25 cards total',                trigger: { type: 'total-cards', value: 25 },            celebration: { message: '📚 25 cards done! Keep going!', animation: 'pop' } },
  { id: 'cards-100',        name: 'Century Club',       icon: '💯', description: 'Completed 100 cards total',               trigger: { type: 'total-cards', value: 100 },           celebration: { message: '💯 100 cards! You\'re in the Century Club!', animation: 'fireworks' } },
  { id: 'perfect-session',  name: 'Perfect!',           icon: '✨', description: '100% correct in a session',               trigger: { type: 'perfect-session', value: true },      celebration: { message: '✨ Perfect session! Not a single mistake!', animation: 'fireworks' } },
  { id: 'comeback',         name: 'Never Give Up!',     icon: '💪', description: 'Got it right after 3 wrong answers',      trigger: { type: 'comeback', value: true },             celebration: { message: '💪 Never give up! You turned it around!', animation: 'pulse' } },
  { id: 'points-100',       name: 'Point Collector',    icon: '💰', description: 'Earned 100 points',                       trigger: { type: 'total-points', value: 100 },          celebration: { message: '💰 100 points! You\'re earning it!', animation: 'pop' } },
  { id: 'points-500',       name: 'Star Earner',        icon: '🌟', description: 'Earned 500 points',                       trigger: { type: 'total-points', value: 500 },          celebration: { message: '🌟 500 points! You\'re a star!', animation: 'fireworks' } }
];

const Points = {
  CORRECT_ANSWER: 10,
  STREAK_BONUS_PER: 2,   // per streak count — streak of 5 = +10 bonus
  FIRST_TRY_BONUS: 5,
  FACT_QUESTION_BONUS: 15,
  TOPIC_COMPLETE_BONUS: 50,
  PERFECT_SESSION_BONUS: 100
};

const Achievements = {

  // Check all triggers and return newly earned achievements
  check(data, context = {}) {
    const newlyEarned = [];
    const earned = data.achievements.earned;

    for (const ach of AchievementsData) {
      if (earned.includes(ach.id)) continue; // already have it

      let shouldAward = false;

      switch (ach.trigger.type) {
        case 'total-correct':
          shouldAward = data.stats.totalCorrect >= ach.trigger.value;
          break;
        case 'streak':
          shouldAward = data.stats.streakCurrent >= ach.trigger.value;
          break;
        case 'topics-completed':
          shouldAward = this._countCompletedTopics(data) >= ach.trigger.value;
          break;
        case 'total-cards':
          shouldAward = data.stats.totalCardsCompleted >= ach.trigger.value;
          break;
        case 'perfect-session':
          shouldAward = context.perfectSession === true;
          break;
        case 'comeback':
          shouldAward = context.comeback === true;
          break;
        case 'total-points':
          shouldAward = data.stats.totalPoints >= ach.trigger.value;
          break;
      }

      if (shouldAward) {
        earned.push(ach.id);
        data.achievements.pending.push(ach.id);
        newlyEarned.push(ach);
      }
    }

    return newlyEarned;
  },

  // Count completed topics
  _countCompletedTopics(data) {
    return Object.values(data.topicProgress).filter(t => t.status === 'completed').length;
  },

  // Mark achievement as displayed
  markDisplayed(data, achId) {
    const idx = data.achievements.pending.indexOf(achId);
    if (idx !== -1) data.achievements.pending.splice(idx, 1);
    if (!data.achievements.displayed.includes(achId)) {
      data.achievements.displayed.push(achId);
    }
  },

  // Get achievement data by id
  getById(id) {
    return AchievementsData.find(a => a.id === id) || null;
  },

  // Get all earned achievement objects
  getEarned(data) {
    return data.achievements.earned.map(id => this.getById(id)).filter(Boolean);
  },

  // Calculate points for a correct answer
  calcPoints(data, isFirstTry) {
    let pts = Points.CORRECT_ANSWER;
    if (isFirstTry) pts += Points.FIRST_TRY_BONUS;
    pts += data.stats.streakCurrent * Points.STREAK_BONUS_PER;
    return pts;
  }
};
