// MathQuest — Card Rendering Engine
// Handles all card types: concept, practice (multiple-choice, fill-blank, true-false), fact

const CARDS_BETWEEN_FACTS = 5;

const Cards = {
  _wrongAttempts: 0,   // track wrong attempts on current card (for "comeback" achievement)
  _cardId: null,       // which card _wrongAttempts belongs to

  // ─── Get next card to display ─────────────────────────────────────────────
  getNextCard(data) {
    const topic = data.currentTopic;
    const topicCards = MathCurriculum.topics[topic].cards;
    const idx = data.currentCardIndex;

    // Time for a fact break?
    if (data.session.cardsSinceLastFact >= CARDS_BETWEEN_FACTS) {
      return this._getFactCard(topic, data);
    }

    // Return current content card (or last if at end)
    const safeIdx = Math.min(idx, topicCards.length - 1);
    return topicCards[safeIdx];
  },

  // Pick a fact card for the current topic
  _getFactCard(topic, data) {
    const facts = MathFacts[topic] || MathFacts.numbers;
    // Rotate through facts based on how many facts have been shown
    const factIndex = Math.floor(data.stats.totalCardsCompleted / (CARDS_BETWEEN_FACTS + 1)) % facts.length;
    return facts[factIndex];
  },

  // ─── Render a card into a DOM container ───────────────────────────────────
  render(card, container, data) {
    container.innerHTML = '';
    container.className = 'card card--' + card.type;

    switch (card.type) {
      case 'concept': this._renderConcept(card, container); break;
      case 'practice': this._renderPractice(card, container, data); break;
      case 'fact':    this._renderFact(card, container); break;
    }
  },

  // ─── Concept card ─────────────────────────────────────────────────────────
  _renderConcept(card, container) {
    container.innerHTML = `
      <div class="card__badge card__badge--concept">Lesson</div>
      <div class="card__visual">${card.content.visual || '<div class="visual-placeholder">💡</div>'}</div>
      <div class="card__body">
        <h2 class="card__title">${card.content.title}</h2>
        <p class="card__explanation">${card.content.explanation}</p>
      </div>
      <div class="card__actions">
        <button class="btn btn--primary" id="btn-continue">Got it! Continue →</button>
      </div>
    `;
  },

  // ─── Practice card ────────────────────────────────────────────────────────
  _renderPractice(card, container, data) {
    const qType = card.content.questionType;
    let inputHtml = '';

    if (qType === 'multiple-choice') {
      inputHtml = this._renderMultipleChoice(card);
    } else if (qType === 'fill-blank') {
      inputHtml = this._renderFillBlank(card);
    } else if (qType === 'true-false') {
      inputHtml = this._renderTrueFalse(card);
    }

    const streakHtml = data.stats.streakCurrent >= 3
      ? `<span class="streak-badge">🔥 ${data.stats.streakCurrent} streak!</span>` : '';

    container.innerHTML = `
      <div class="card__badge card__badge--practice">Practice</div>
      <div class="card__body">
        <p class="card__question">${card.content.question}</p>
        ${card.content.visual ? `<div class="card__visual card__visual--inline">${card.content.visual}</div>` : ''}
      </div>
      <div class="card__inputs">${inputHtml}</div>
      <div class="card__hint hidden" id="hint-box">
        <span class="hint-label">💡 Hint:</span> ${card.content.hint}
      </div>
      <div class="card__actions">
        <button class="btn btn--primary" id="btn-check">Check Answer ✓</button>
        <button class="btn btn--hint" id="btn-hint">💡 Need a hint?</button>
        ${streakHtml}
      </div>
    `;

    // Bind hint toggle
    const hintBtn = container.querySelector('#btn-hint');
    const hintBox = container.querySelector('#hint-box');
    if (hintBtn) hintBtn.addEventListener('click', () => {
      hintBox.classList.toggle('hidden');
      hintBtn.textContent = hintBox.classList.contains('hidden') ? '💡 Need a hint?' : '💡 Hide hint';
    });

    // Allow Enter key to submit fill-blank answer
    const blankInput = container.querySelector('#blank-input');
    if (blankInput) {
      blankInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const btnCheck = container.querySelector('#btn-check');
          if (btnCheck && !btnCheck.disabled) btnCheck.click();
        }
      });
    }
  },

  // Multiple choice options
  _renderMultipleChoice(card) {
    const acceptMultiple = card.content.acceptMultiple;
    return `
      <div class="options-grid">
        ${card.content.options.map((opt, i) => `
          <button class="option-btn" data-option="${this._escAttr(opt)}" data-index="${i}">
            ${opt}
          </button>
        `).join('')}
      </div>
      ${acceptMultiple ? '<p class="multi-hint">You may select more than one answer.</p>' : ''}
    `;
  },

  // Fill in the blank
  _renderFillBlank(card) {
    return `
      <div class="fill-blank">
        <input type="text" class="blank-input" id="blank-input"
               placeholder="Type your answer here..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
    `;
  },

  // True / False
  _renderTrueFalse(card) {
    return `
      <div class="tf-options">
        <button class="option-btn option-btn--tf" data-option="True">True ✓</button>
        <button class="option-btn option-btn--tf" data-option="False">False ✗</button>
      </div>
    `;
  },

  // ─── Fact card ────────────────────────────────────────────────────────────
  _renderFact(card, container) {
    const fq = card.content.funQuestion;
    container.innerHTML = `
      <div class="card__badge card__badge--fact">Fact Break! 🌌</div>
      <div class="card__body">
        <div class="fact-hook">${card.content.hook}</div>
        <h2 class="card__title">${card.content.title}</h2>
        <p class="card__explanation">${card.content.fact}</p>
      </div>
      ${fq ? `
        <div class="fact-question">
          <p class="fq-label">💭 Fun question (optional):</p>
          <p class="fq-text">${fq.text}</p>
          <div class="fq-controls">
            <input type="text" class="blank-input" id="fq-input" placeholder="Think about it...">
            <button class="btn btn--secondary" id="btn-reveal">Reveal Answer</button>
          </div>
          <div class="fq-answer hidden" id="fq-answer">
            <strong>Answer:</strong> ${fq.answer}
          </div>
        </div>
      ` : ''}
      <div class="card__actions">
        <button class="btn btn--primary" id="btn-continue">Continue Learning →</button>
      </div>
    `;

    // Bind reveal button
    const revealBtn = container.querySelector('#btn-reveal');
    const answerBox = container.querySelector('#fq-answer');
    if (revealBtn && answerBox) {
      revealBtn.addEventListener('click', () => {
        answerBox.classList.remove('hidden');
        revealBtn.textContent = 'Answer Revealed ✓';
        revealBtn.disabled = true;
      });
    }
  },

  // ─── Check answer ─────────────────────────────────────────────────────────
  checkAnswer(card, container) {
    if (card.type !== 'practice') return { correct: true, isFirstTry: true };

    const qType = card.content.questionType;
    let selectedAnswers = [];

    if (qType === 'multiple-choice' || qType === 'true-false') {
      const selected = container.querySelectorAll('.option-btn.selected');
      selectedAnswers = Array.from(selected).map(b => b.dataset.option);
    } else if (qType === 'fill-blank') {
      const input = container.querySelector('#blank-input');
      if (input) selectedAnswers = [input.value.trim()];
    }

    if (selectedAnswers.length === 0) {
      this._showNoSelectionError(container);
      return null; // no answer yet
    }

    const correct = card.content.correct.map(c => c.toLowerCase().trim());
    const given = selectedAnswers.map(s => s.toLowerCase().trim());

    // For multiple correct answers: all must match
    let isCorrect;
    if (card.content.acceptMultiple) {
      isCorrect = correct.every(c => given.includes(c)) && given.every(g => correct.includes(g));
    } else {
      isCorrect = given.length === 1 && correct.includes(given[0]);
    }

    const isFirstTry = this._wrongAttempts === 0;
    if (!isCorrect) this._wrongAttempts++;

    return { correct: isCorrect, isFirstTry };
  },

  // ─── Show feedback overlay ────────────────────────────────────────────────
  showFeedback(card, container, isCorrect, data) {
    const msg = isCorrect ? card.content.explanationOnCorrect : card.content.explanationOnWrong;
    const streakMsg = isCorrect && data.stats.streakCurrent >= 3
      ? `<div class="streak-msg">🔥 ${data.stats.streakCurrent} in a row!</div>` : '';

    const overlay = document.createElement('div');
    overlay.className = 'feedback-overlay feedback--' + (isCorrect ? 'correct' : 'incorrect');
    overlay.innerHTML = `
      <div class="feedback-icon">${isCorrect ? '✓' : '💪'}</div>
      <div class="feedback-title">${isCorrect ? 'Awesome!' : 'Almost there!'}</div>
      <div class="feedback-msg">${msg}</div>
      ${streakMsg}
      <button class="btn btn--primary" id="btn-next">
        ${isCorrect ? 'Next Card →' : 'Try Again'}
      </button>
    `;
    container.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('feedback-visible'));
    return overlay;
  },

  // Highlight selected/correct options
  highlightOptions(card, container, isCorrect) {
    if (card.content.questionType === 'fill-blank') return;
    const correct = card.content.correct.map(c => c.toLowerCase().trim());
    container.querySelectorAll('.option-btn').forEach(btn => {
      const val = btn.dataset.option.toLowerCase().trim();
      if (correct.includes(val)) {
        btn.classList.add('option--correct');
      } else if (btn.classList.contains('selected')) {
        btn.classList.add('option--wrong');
      }
      btn.disabled = true;
    });
  },

  // Reset attempt counter only when moving to a new card
  resetAttempts(cardId) {
    if (cardId !== this._cardId) {
      this._wrongAttempts = 0;
      this._cardId = cardId;
    }
  },

  // ─── Setup option button click handlers ───────────────────────────────────
  setupOptionHandlers(container, card) {
    const acceptMultiple = card.content.acceptMultiple;
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        if (!acceptMultiple) {
          // Single select: deselect others
          container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        }
        btn.classList.toggle('selected');
      });
    });
  },

  // Show error when no answer selected
  _showNoSelectionError(container) {
    let err = container.querySelector('.no-selection-err');
    if (!err) {
      err = document.createElement('p');
      err.className = 'no-selection-err';
      err.textContent = 'Please select an answer first!';
      const actions = container.querySelector('.card__actions');
      if (actions) actions.before(err);
    }
    err.classList.add('shake');
    setTimeout(() => err.classList.remove('shake'), 600);
  },

  // Escape attribute value
  _escAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
};
