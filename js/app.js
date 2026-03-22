// MathQuest — Main App Controller

const App = {
  data: null,
  currentCard: null,
  sessionTotal: 30,
  sessionCardNum: 0,

  // ─── Initialize ───────────────────────────────────────────────────────────
  init() {
    this.data = Storage.init();
    this.sessionTotal = 30; // 30 cards per session

    // Start fresh session tracking
    this.sessionCardNum = 0;
    this.data.session.sessionCardCount = 0;
    Storage.save(this.data);

    // Start current topic if not started
    const tp = this.data.topicProgress[this.data.currentTopic];
    if (!tp.startedAt) {
      tp.startedAt = new Date().toISOString();
      tp.status = 'in-progress';
      Storage.save(this.data);
    }

    this.updateHeader();
    this.updateProgressBar();
    this.loadNextCard();
  },

  // ─── Load next card ───────────────────────────────────────────────────────
  loadNextCard() {
    if (this.sessionCardNum >= this.sessionTotal) {
      this.showSessionComplete();
      return;
    }

    const card = Cards.getNextCard(this.data);
    this.currentCard = card;
    Cards.resetAttempts(card.id);

    const container = document.getElementById('card-container');
    if (!container) return;

    // Animate out, then in
    container.classList.add('card-exit');
    setTimeout(() => {
      container.classList.remove('card-exit');
      Cards.render(card, container, this.data);
      container.classList.add('card-enter');
      setTimeout(() => container.classList.remove('card-enter'), 400);

      // Setup interactions
      this.bindCardActions(card, container);
      Cards.setupOptionHandlers(container, card);

      // Update UI
      this.sessionCardNum++;
      this.updateProgressBar();
      this.updateStats();
    }, 200);
  },

  // ─── Bind card action buttons ─────────────────────────────────────────────
  bindCardActions(card, container) {
    // Continue button (concept + fact cards)
    const btnContinue = container.querySelector('#btn-continue');
    if (btnContinue) {
      btnContinue.addEventListener('click', () => {
        Storage.recordCardComplete(this.data, card.type);
        const newAchs = Achievements.check(this.data);
        Storage.save(this.data);
        this.showAchievementsIfAny(newAchs, () => this.loadNextCard());
      });
    }

    // Check answer button (practice cards)
    const btnCheck = container.querySelector('#btn-check');
    if (btnCheck) {
      btnCheck.addEventListener('click', () => {
        const result = Cards.checkAnswer(card, container);
        if (result === null) return; // no answer selected

        const isCorrect = result.correct;
        const pts = isCorrect ? Achievements.calcPoints(this.data, result.isFirstTry) : 0;
        Storage.recordAnswer(this.data, isCorrect, pts);

        // Check comeback achievement
        const comebackCtx = { comeback: !isCorrect && this.data.stats.streakCurrent === 0 && Cards._wrongAttempts > 2 };

        Cards.highlightOptions(card, container, isCorrect);
        btnCheck.disabled = true;
        const hintBtn = container.querySelector('#btn-hint');
        if (hintBtn) hintBtn.disabled = true;

        const overlay = Cards.showFeedback(card, container, isCorrect, this.data);
        this.updateStats();

        const btnNext = overlay.querySelector('#btn-next');
        if (btnNext) {
          btnNext.addEventListener('click', () => {
            if (isCorrect) {
              Storage.recordCardComplete(this.data, card.type);
            }
            const newAchs = Achievements.check(this.data, comebackCtx);
            Storage.save(this.data);
            this.showAchievementsIfAny(newAchs, () => this.loadNextCard());
          });
        }
      });
    }
  },

  // ─── Update progress bar ─────────────────────────────────────────────────
  updateProgressBar() {
    const fill = document.getElementById('progress-fill');
    const label = document.getElementById('progress-label');
    if (!fill || !label) return;

    const pct = Math.min(100, Math.round((this.sessionCardNum / this.sessionTotal) * 100));
    fill.style.width = pct + '%';
    label.textContent = `${this.sessionCardNum} / ${this.sessionTotal} cards`;
  },

  // ─── Update header stats ──────────────────────────────────────────────────
  updateHeader() {
    const topicEl = document.getElementById('header-topic');
    if (topicEl) {
      const topic = MathCurriculum.topics[this.data.currentTopic];
      topicEl.textContent = topic.icon + ' ' + topic.name;
    }
  },

  // ─── Update gamification stats bar ───────────────────────────────────────
  updateStats() {
    const streakEl = document.getElementById('stat-streak');
    const pointsEl = document.getElementById('stat-points');
    const gradeEl  = document.getElementById('stat-grade');

    if (streakEl) {
      const s = this.data.stats.streakCurrent;
      streakEl.textContent = s >= 3 ? `🔥 ${s}` : `⚡ ${s}`;
    }
    if (pointsEl) pointsEl.textContent = '⭐ ' + this.data.stats.totalPoints;
    if (gradeEl) {
      const topic = MathCurriculum.topics[this.data.currentTopic];
      gradeEl.textContent = topic.gradeLevel;
    }
  },

  // ─── Show achievement popup ───────────────────────────────────────────────
  showAchievementsIfAny(achs, callback) {
    if (!achs || achs.length === 0) {
      callback();
      return;
    }

    const ach = achs[0]; // show one at a time
    const overlay = document.getElementById('achievement-overlay');
    const iconEl  = document.getElementById('ach-icon');
    const nameEl  = document.getElementById('ach-name');
    const msgEl   = document.getElementById('ach-msg');
    const btnEl   = document.getElementById('btn-ach-ok');

    if (!overlay) { callback(); return; }

    iconEl.textContent  = ach.icon;
    nameEl.textContent  = ach.name;
    msgEl.textContent   = ach.celebration.message;

    overlay.classList.remove('hidden');
    overlay.classList.add('ach-pop');

    Achievements.markDisplayed(this.data, ach.id);
    Storage.save(this.data);

    const proceed = () => {
      overlay.classList.add('hidden');
      overlay.classList.remove('ach-pop');
      // If more achievements to show, chain them
      const remaining = achs.slice(1);
      if (remaining.length > 0) {
        this.showAchievementsIfAny(remaining, callback);
      } else {
        callback();
      }
    };

    btnEl.onclick = proceed;
    // Auto-dismiss after 4 seconds
    setTimeout(proceed, 4000);
  },

  // ─── Session complete screen ─────────────────────────────────────────────
  showSessionComplete() {
    const container = document.getElementById('card-container');
    if (!container) return;

    const d = this.data;
    const accuracy = d.session.attemptsThisSession > 0
      ? Math.round((d.session.correctThisSession / d.session.attemptsThisSession) * 100)
      : 100;

    const topic = MathCurriculum.topics[d.currentTopic];
    const nextTopicId = MathCurriculum.progression[
      MathCurriculum.progression.indexOf(d.currentTopic) + 1
    ];
    const nextTopic = nextTopicId ? MathCurriculum.topics[nextTopicId] : null;
    const tp = d.topicProgress[d.currentTopic];

    // Perfect session achievement
    let perfectMsg = '';
    if (accuracy === 100 && d.session.attemptsThisSession > 0) {
      const newAchs = Achievements.check(d, { perfectSession: true });
      if (newAchs.length > 0) {
        perfectMsg = `<div class="session-achievement">${newAchs[0].celebration.message}</div>`;
      }
    }

    container.innerHTML = `
      <div class="session-complete">
        <div class="session-icon">🎉</div>
        <h2>Session Complete!</h2>
        <div class="session-stats">
          <div class="s-stat"><span class="s-val">${this.sessionCardNum}</span><span class="s-lbl">Cards</span></div>
          <div class="s-stat"><span class="s-val">${accuracy}%</span><span class="s-lbl">Accuracy</span></div>
          <div class="s-stat"><span class="s-val">${d.session.correctThisSession}</span><span class="s-lbl">Correct</span></div>
          <div class="s-stat"><span class="s-val">${d.stats.streakBest}</span><span class="s-lbl">Best Streak</span></div>
        </div>
        ${perfectMsg}
        <p class="session-topic">You studied: <strong>${topic.icon} ${topic.name}</strong></p>
        ${nextTopic && d.topicProgress[nextTopicId].status !== 'locked' ?
          `<p class="session-unlock">🔓 <strong>${nextTopic.name}</strong> is unlocked!</p>` : ''}
        <div class="session-actions">
          <button class="btn btn--primary" id="btn-keep-going">Keep Going 🚀</button>
          <a href="index.html" class="btn btn--secondary">Back to Topics</a>
          <a href="progress.html" class="btn btn--ghost">View Progress</a>
        </div>
      </div>
    `;

    document.getElementById('btn-keep-going')?.addEventListener('click', () => {
      this.sessionCardNum = 0;
      this.data.session.sessionCardCount = 0;
      this.data.session.correctThisSession = 0;
      this.data.session.attemptsThisSession = 0;
      Storage.save(this.data);
      this.loadNextCard();
    });
  },

  // ─── Switch to a different topic ─────────────────────────────────────────
  switchTopic(topicId) {
    const ok = Storage.switchTopic(this.data, topicId);
    if (!ok) return false;
    this.sessionCardNum = 0;
    this.updateHeader();
    this.loadNextCard();
    return true;
  }
};

// Boot when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('card-container')) {
    // Handle ?topic= URL param before initializing (must happen first)
    const params = new URLSearchParams(window.location.search);
    const topicParam = params.get('topic');
    if (topicParam && MathCurriculum.topics[topicParam]) {
      const d = Storage.init();
      Storage.switchTopic(d, topicParam);
    }
    App.init();
  }
});
