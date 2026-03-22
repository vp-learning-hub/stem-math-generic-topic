// MathQuest Curriculum Data
// Grades 4–8 | 10 progressive topics | Space Theme

const MathCurriculum = {
  progression: [
    'numbers', 'fractions', 'decimals', 'percentages',
    'ratios', 'geometry', 'algebra', 'statistics',
    'advanced-algebra', 'exponents'
  ],
  unlockThreshold: 70,

  topics: {

    // ─── TOPIC 1: NUMBERS (Grade 4-5, Difficulty 1) ──────────────────────────
    numbers: {
      id: 'numbers',
      name: 'Numbers & Operations',
      icon: '🔢',
      gradeLevel: 'Grade 4–5',
      difficulty: 1,
      color: '#6366f1',
      description: 'Start your math journey with the building blocks of everything!',
      cards: [
        {
          id: 'num-001',
          type: 'concept',
          difficulty: 1,
          content: {
            title: 'What Are Whole Numbers?',
            explanation: 'Whole numbers are the counting numbers you have known since you were tiny! They go 0, 1, 2, 3... all the way to infinity. No fractions. No decimals. Just clean, whole numbers! Every math journey starts right here.',
            visual: '<div class="visual-row">0 &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; 6 &nbsp; 7 &nbsp; 8 &nbsp; 9 &nbsp; 10...</div>',
            visualAlt: 'Number line from 0 to 10'
          }
        },
        {
          id: 'num-002',
          type: 'concept',
          difficulty: 1,
          content: {
            title: 'Place Value — Where Each Digit Lives',
            explanation: 'Every digit has a home! In the number 3,456 — the 6 is in the ones place, 5 is in the tens place, 4 is in the hundreds place, and 3 is in the thousands place. The further left a digit is, the bigger its value!',
            visual: '<div class="place-value-table"><span class="pv-col"><span class="pv-label">Thousands</span><span class="pv-digit">3</span></span><span class="pv-col"><span class="pv-label">Hundreds</span><span class="pv-digit">4</span></span><span class="pv-col"><span class="pv-label">Tens</span><span class="pv-digit">5</span></span><span class="pv-col"><span class="pv-label">Ones</span><span class="pv-digit">6</span></span></div>',
            visualAlt: 'Place value chart for 3456'
          }
        },
        {
          id: 'num-p001',
          type: 'practice',
          difficulty: 1,
          content: {
            question: 'In the number 7,829 — what is the value of the digit 8?',
            questionType: 'multiple-choice',
            options: ['8', '80', '800', '8,000'],
            correct: ['800'],
            acceptMultiple: false,
            hint: 'Count the positions from the right: ones, tens, hundreds...',
            explanationOnCorrect: 'Yes! The 8 is in the hundreds place, so its value is 800. Great job reading place value!',
            explanationOnWrong: 'Not quite. Count from the right: 9 is ones, 2 is tens, 8 is hundreds. So 8 means 800!'
          }
        },
        {
          id: 'num-p002',
          type: 'practice',
          difficulty: 1,
          content: {
            question: 'Round 4,673 to the nearest hundred.',
            questionType: 'multiple-choice',
            options: ['4,600', '4,700', '5,000', '4,670'],
            correct: ['4,700'],
            acceptMultiple: false,
            hint: 'Look at the tens digit. If it\'s 5 or more, round up. If it\'s less than 5, round down.',
            explanationOnCorrect: 'Correct! The tens digit is 7 (≥5), so we round the hundreds up: 4,700!',
            explanationOnWrong: 'Look at the tens place: 7. Since 7 ≥ 5, the hundreds digit rounds up from 6 to 7. Answer: 4,700.'
          }
        },
        {
          id: 'num-p003',
          type: 'practice',
          difficulty: 1,
          content: {
            question: 'Order these numbers from least to greatest: 5,021 | 502 | 5,201 | 520',
            questionType: 'multiple-choice',
            options: ['502, 520, 5,021, 5,201', '520, 502, 5,201, 5,021', '502, 520, 5,201, 5,021', '5,021, 5,201, 520, 502'],
            correct: ['502, 520, 5,021, 5,201'],
            acceptMultiple: false,
            hint: 'Compare how many digits each number has first. Fewer digits = smaller number!',
            explanationOnCorrect: 'Perfect! 502 and 520 have 3 digits (502 < 520), then 5,021 and 5,201 have 4 digits (5,021 < 5,201).',
            explanationOnWrong: 'Start with digit count: 502 and 520 are both 3-digit (502 < 520). Then 5,021 and 5,201 are 4-digit (5,021 < 5,201).'
          }
        },
        {
          id: 'num-003',
          type: 'concept',
          difficulty: 1,
          content: {
            title: 'Multiplication = Turbo Addition',
            explanation: '3 × 4 means "add 3 four times": 3 + 3 + 3 + 3 = 12. Multiplication is a shortcut for repeated addition! Think of it like this: if you have 4 bags with 3 apples each, you have 4 × 3 = 12 apples total.',
            visual: '<div class="emoji-visual">🍎🍎🍎 &nbsp; 🍎🍎🍎 &nbsp; 🍎🍎🍎 &nbsp; 🍎🍎🍎<br><small>4 groups of 3 = 12</small></div>',
            visualAlt: 'Four groups of 3 apples'
          }
        },
        {
          id: 'num-004',
          type: 'concept',
          difficulty: 1,
          content: {
            title: 'Division = Equal Sharing',
            explanation: 'Division is splitting a number into equal groups! 20 ÷ 4 asks: "If I share 20 items among 4 friends, how many does each get?" The answer is 5. Division is the opposite of multiplication!',
            visual: '<div class="emoji-visual">🍕🍕🍕🍕🍕 🍕🍕🍕🍕🍕 🍕🍕🍕🍕🍕 🍕🍕🍕🍕🍕<br><small>20 slices ÷ 4 people = 5 slices each</small></div>',
            visualAlt: '20 slices split into 4 groups of 5'
          }
        },
        {
          id: 'num-p004',
          type: 'practice',
          difficulty: 1,
          content: {
            question: 'What is 9 × 7?',
            questionType: 'multiple-choice',
            options: ['54', '63', '56', '72'],
            correct: ['63'],
            acceptMultiple: false,
            hint: 'Try skip counting by 9: 9, 18, 27, 36, 45, 54, 63...',
            explanationOnCorrect: 'Excellent! 9 × 7 = 63. A trick: 9 × 7 = (10 × 7) - 7 = 70 - 7 = 63!',
            explanationOnWrong: '9 × 7 = 63. A handy trick: 9 × any number = (10 × that number) minus that number. So 9 × 7 = 70 - 7 = 63!'
          }
        },
        {
          id: 'num-p005',
          type: 'practice',
          difficulty: 1,
          content: {
            question: '144 ÷ 12 = ?',
            questionType: 'multiple-choice',
            options: ['11', '12', '13', '14'],
            correct: ['12'],
            acceptMultiple: false,
            hint: 'Think: 12 × ? = 144. What times 12 gives 144?',
            explanationOnCorrect: 'Right! 144 ÷ 12 = 12. And you can check: 12 × 12 = 144. A perfect square!',
            explanationOnWrong: '144 ÷ 12 = 12. Check it: 12 × 12 = 144. Division and multiplication are always connected!'
          }
        },
        {
          id: 'num-005',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'Order of Operations — Who Goes First?',
            explanation: 'When you have 2 + 3 × 4, do you add or multiply first? Always multiply/divide BEFORE adding/subtracting! Remember PEMDAS: Parentheses, Exponents, Multiply/Divide, Add/Subtract. So 2 + 3 × 4 = 2 + 12 = 14, not 20!',
            visual: '<div class="pemdas-box"><strong>PEMDAS</strong><br>🔵 Parentheses first<br>🔵 Exponents<br>🟡 Multiply &amp; Divide<br>🟢 Add &amp; Subtract</div>',
            visualAlt: 'PEMDAS order of operations'
          }
        },
        {
          id: 'num-p006',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'Solve: 5 + 3 × 6 − 2',
            questionType: 'multiple-choice',
            options: ['46', '21', '17', '28'],
            correct: ['21'],
            acceptMultiple: false,
            hint: 'Multiply first: 3 × 6 = 18. Then go left to right: 5 + 18 - 2.',
            explanationOnCorrect: 'Spot on! Step 1: 3 × 6 = 18. Step 2: 5 + 18 = 23. Step 3: 23 − 2 = 21.',
            explanationOnWrong: 'Remember PEMDAS: multiply first! 3 × 6 = 18. Now: 5 + 18 − 2 = 21.'
          }
        },
        {
          id: 'num-p007',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'Solve: (8 + 4) × 3 − 5',
            questionType: 'multiple-choice',
            options: ['31', '25', '29', '36'],
            correct: ['31'],
            acceptMultiple: false,
            hint: 'Do the parentheses FIRST: (8 + 4) = 12. Then multiply, then subtract.',
            explanationOnCorrect: 'Brilliant! (8 + 4) = 12 → 12 × 3 = 36 → 36 − 5 = 31. PEMDAS mastered!',
            explanationOnWrong: 'Parentheses first: (8 + 4) = 12. Then multiply: 12 × 3 = 36. Then subtract: 36 − 5 = 31.'
          }
        },
        {
          id: 'num-p008',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'True or False: 10 − 2 × 3 = 24',
            questionType: 'true-false',
            statement: '10 − 2 × 3 = 24',
            correct: ['False'],
            hint: 'Do multiplication before subtraction! 2 × 3 = 6. Then 10 − 6 = ?',
            explanationOnCorrect: 'Right! It is FALSE. Multiply first: 2 × 3 = 6. Then 10 − 6 = 4. Not 24!',
            explanationOnWrong: 'It is FALSE. Order of operations: multiply first! 2 × 3 = 6, then 10 − 6 = 4.'
          }
        }
      ]
    },

    // ─── TOPIC 2: FRACTIONS (Grade 5, Difficulty 2) ─────────────────────────
    fractions: {
      id: 'fractions',
      name: 'Fractions',
      icon: '🍕',
      gradeLevel: 'Grade 5',
      difficulty: 2,
      color: '#f59e0b',
      description: 'Cut things into equal pieces and discover the world of fractions!',
      cards: [
        {
          id: 'frac-001',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'What Is a Fraction?',
            explanation: 'A fraction shows part of a whole. Imagine a pizza cut into 4 equal slices. If you eat 1 slice, you ate 1/4 of the pizza! The bottom number (4) tells you how many total parts. The top number (1) tells you how many parts you have.',
            visual: '<div class="fraction-pizza">🍕<br><div class="fraction-display"><span class="frac-num">1</span><span class="frac-bar">—</span><span class="frac-den">4</span></div><small>1 slice out of 4</small></div>',
            visualAlt: 'Pizza showing 1/4'
          }
        },
        {
          id: 'frac-002',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'Numerator and Denominator',
            explanation: 'A fraction has two parts. The NUMERATOR is the top number — it counts how many parts you have. The DENOMINATOR is the bottom number — it says how many equal parts the whole is split into. In 3/8: you have 3 parts out of 8 total.',
            visual: '<div class="frac-label"><div class="frac-part top">3 ← Numerator (parts you have)</div><div class="frac-bar-line">━━━</div><div class="frac-part bot">8 ← Denominator (total parts)</div></div>',
            visualAlt: 'Labeled fraction 3/8'
          }
        },
        {
          id: 'frac-p001',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'A chocolate bar has 6 equal pieces. You eat 2. What fraction did you eat?',
            questionType: 'multiple-choice',
            options: ['2/4', '1/3', '2/6', '1/6'],
            correct: ['2/6', '1/3'],
            acceptMultiple: true,
            hint: 'You ate 2 pieces out of 6 total. Both 2/6 and its simplified form are correct!',
            explanationOnCorrect: 'Awesome! 2/6 is correct — and 2/6 simplifies to 1/3 (divide both by 2). Both answers are right!',
            explanationOnWrong: 'You ate 2 pieces from 6 total = 2/6. Simplify by dividing both numbers by 2: 1/3. Both are correct!'
          }
        },
        {
          id: 'frac-p002',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'Which fraction is LARGER: 3/4 or 2/3?',
            questionType: 'multiple-choice',
            options: ['3/4', '2/3', 'They are equal', 'Cannot compare'],
            correct: ['3/4'],
            acceptMultiple: false,
            hint: 'Convert to decimals: 3/4 = 0.75, and 2/3 ≈ 0.667. Which is bigger?',
            explanationOnCorrect: 'Correct! 3/4 = 0.75 and 2/3 ≈ 0.667. So 3/4 is larger!',
            explanationOnWrong: '3/4 = 0.75, and 2/3 ≈ 0.667. So 3/4 is the larger fraction!'
          }
        },
        {
          id: 'frac-003',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'Equivalent Fractions — Same Value, Different Look',
            explanation: '1/2 and 2/4 and 4/8 all look different but are the same amount! They are equivalent fractions. You can make equivalent fractions by multiplying (or dividing) the top AND bottom by the same number. It is like zooming in on the same piece of pie!',
            visual: '<div class="equiv-fracs"><span class="efrac">1/2</span> <span class="eq">=</span> <span class="efrac">2/4</span> <span class="eq">=</span> <span class="efrac">4/8</span> <span class="eq">=</span> <span class="efrac">3/6</span></div>',
            visualAlt: 'Equivalent fractions'
          }
        },
        {
          id: 'frac-p003',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'Fill in the blank: 1/3 = ?/12',
            questionType: 'multiple-choice',
            options: ['3', '4', '6', '2'],
            correct: ['4'],
            acceptMultiple: false,
            hint: 'To go from 3 to 12, you multiply by 4. Do the same to the top number!',
            explanationOnCorrect: 'Yes! 3 × 4 = 12, so 1 × 4 = 4. Therefore 1/3 = 4/12. Equivalent!',
            explanationOnWrong: 'Multiply denominator: 3 × 4 = 12. So multiply numerator by 4 too: 1 × 4 = 4. Answer: 4/12.'
          }
        },
        {
          id: 'frac-004',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Adding Fractions (Same Bottom Number)',
            explanation: 'When fractions have the SAME denominator, just add the tops! 2/7 + 3/7 = 5/7. The bottom stays the same. Think of it like counting pieces of the same-sized pizza: 2 slices + 3 slices = 5 slices (still from the same pizza).',
            visual: '<div class="add-fracs">2/7 + 3/7 = <strong>5/7</strong><br><small>Add tops, keep the bottom!</small></div>',
            visualAlt: 'Adding like fractions'
          }
        },
        {
          id: 'frac-p004',
          type: 'practice',
          difficulty: 3,
          content: {
            question: '3/8 + 2/8 = ?',
            questionType: 'multiple-choice',
            options: ['5/8', '5/16', '1/2', '6/8'],
            correct: ['5/8'],
            acceptMultiple: false,
            hint: 'Same denominator! Just add the top numbers. Keep 8 on the bottom.',
            explanationOnCorrect: 'Perfect! 3 + 2 = 5, keep the 8: answer is 5/8!',
            explanationOnWrong: 'Same denominators: just add tops. 3 + 2 = 5. Keep the 8. Answer: 5/8.'
          }
        },
        {
          id: 'frac-005',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Adding Fractions with Different Denominators',
            explanation: 'To add 1/3 + 1/4, you need a common denominator. Find a number both 3 and 4 divide into: that is 12! Convert: 1/3 = 4/12 and 1/4 = 3/12. Now add: 4/12 + 3/12 = 7/12. It is like making the pizza slices the same size first!',
            visual: '<div class="add-unlike">1/3 + 1/4<br>→ 4/12 + 3/12<br>= <strong>7/12</strong></div>',
            visualAlt: 'Adding unlike fractions'
          }
        },
        {
          id: 'frac-p005',
          type: 'practice',
          difficulty: 3,
          content: {
            question: '1/2 + 1/3 = ?',
            questionType: 'multiple-choice',
            options: ['2/5', '5/6', '2/6', '3/5'],
            correct: ['5/6'],
            acceptMultiple: false,
            hint: 'Common denominator of 2 and 3 is 6. Convert: 1/2 = 3/6, and 1/3 = 2/6.',
            explanationOnCorrect: 'Brilliant! 1/2 = 3/6 and 1/3 = 2/6. Add them: 3/6 + 2/6 = 5/6!',
            explanationOnWrong: 'Find LCD = 6. Convert: 1/2 = 3/6, 1/3 = 2/6. Add tops: 3 + 2 = 5. Answer: 5/6.'
          }
        },
        {
          id: 'frac-006',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Multiplying Fractions — Easier Than You Think!',
            explanation: 'Multiplying fractions is actually EASIER than adding them. Just multiply the tops together, and multiply the bottoms together! 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. No need to find a common denominator!',
            visual: '<div class="mult-frac">2/3 × 3/4 = 6/12 = <strong>1/2</strong><br><small>Multiply tops × tops, bottoms × bottoms</small></div>',
            visualAlt: 'Multiplying fractions'
          }
        },
        {
          id: 'frac-p006',
          type: 'practice',
          difficulty: 3,
          content: {
            question: '3/4 × 2/5 = ?',
            questionType: 'multiple-choice',
            options: ['5/9', '6/20', '3/10', '1/2'],
            correct: ['6/20', '3/10'],
            acceptMultiple: true,
            hint: 'Multiply tops: 3 × 2 = 6. Multiply bottoms: 4 × 5 = 20. Then simplify!',
            explanationOnCorrect: 'Great! 3 × 2 = 6 and 4 × 5 = 20 → 6/20 = 3/10 (divide by 2). Both are correct!',
            explanationOnWrong: '3 × 2 = 6 (top), 4 × 5 = 20 (bottom) → 6/20. Simplify by dividing by 2: 3/10.'
          }
        }
      ]
    },

    // ─── TOPIC 3: DECIMALS (Grade 5-6, Difficulty 2-3) ───────────────────────
    decimals: {
      id: 'decimals',
      name: 'Decimals',
      icon: '💫',
      gradeLevel: 'Grade 5–6',
      difficulty: 2,
      color: '#06b6d4',
      description: 'Unlock the power of numbers between whole numbers!',
      cards: [
        {
          id: 'dec-001',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'What Are Decimals?',
            explanation: 'Decimals are numbers that fall between whole numbers. The dot (called a decimal point) separates the whole number part from the part less than one. 2.5 means "two and a half." You see decimals every day — prices, heights, and sports scores!',
            visual: '<div class="decimal-vis">3 . 7<br><small>↑ &nbsp; &nbsp; &nbsp; ↑<br>Whole &nbsp; Part less than one</small></div>',
            visualAlt: 'Decimal number 3.7 labeled'
          }
        },
        {
          id: 'dec-002',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'Decimal Place Value',
            explanation: 'To the right of the decimal point, places are tenths, hundredths, thousandths... In 5.374 — the 3 is in the tenths place (3/10), 7 is in the hundredths place (7/100), and 4 is in the thousandths place (4/1000). The more places to the right, the smaller the value!',
            visual: '<div class="place-value-table"><span class="pv-col"><span class="pv-label">Ones</span><span class="pv-digit">5</span></span><span class="pv-col pv-dot"><span class="pv-label">.</span><span class="pv-digit">.</span></span><span class="pv-col"><span class="pv-label">Tenths</span><span class="pv-digit">3</span></span><span class="pv-col"><span class="pv-label">Hundredths</span><span class="pv-digit">7</span></span><span class="pv-col"><span class="pv-label">Thousandths</span><span class="pv-digit">4</span></span></div>',
            visualAlt: 'Decimal place value chart'
          }
        },
        {
          id: 'dec-p001',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'In the number 8.563 — what digit is in the hundredths place?',
            questionType: 'multiple-choice',
            options: ['8', '5', '6', '3'],
            correct: ['6'],
            acceptMultiple: false,
            hint: 'After the decimal: tenths (5), hundredths (?), thousandths (3)',
            explanationOnCorrect: 'Correct! Reading right after the decimal: 5 = tenths, 6 = hundredths, 3 = thousandths.',
            explanationOnWrong: 'After the decimal point: first digit is tenths (5), second is hundredths (6), third is thousandths (3).'
          }
        },
        {
          id: 'dec-p002',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'Which is larger: 0.45 or 0.5?',
            questionType: 'multiple-choice',
            options: ['0.45', '0.5', 'They are equal'],
            correct: ['0.5'],
            acceptMultiple: false,
            hint: 'Write 0.5 as 0.50 and then compare digit by digit.',
            explanationOnCorrect: '0.5 is larger! Write it as 0.50. Now compare: 0.50 vs 0.45. 50 hundredths > 45 hundredths.',
            explanationOnWrong: '0.5 = 0.50. Now compare: 0.50 vs 0.45. In the tenths place, 5 > 4, so 0.5 > 0.45!'
          }
        },
        {
          id: 'dec-003',
          type: 'concept',
          difficulty: 2,
          content: {
            title: 'Decimals and Fractions Are Cousins!',
            explanation: 'Every decimal can be written as a fraction. 0.5 = 5/10 = 1/2. 0.25 = 25/100 = 1/4. 0.75 = 75/100 = 3/4. To convert, just look at the last decimal place — tenths means divide by 10, hundredths means divide by 100!',
            visual: '<div class="dec-frac-table"><div>0.5 = 1/2</div><div>0.25 = 1/4</div><div>0.75 = 3/4</div><div>0.1 = 1/10</div></div>',
            visualAlt: 'Common decimal to fraction conversions'
          }
        },
        {
          id: 'dec-p003',
          type: 'practice',
          difficulty: 2,
          content: {
            question: 'Convert 3/4 to a decimal.',
            questionType: 'multiple-choice',
            options: ['0.34', '0.43', '0.75', '0.25'],
            correct: ['0.75'],
            acceptMultiple: false,
            hint: 'Divide the top number by the bottom: 3 ÷ 4 = ?',
            explanationOnCorrect: 'Exactly! 3 ÷ 4 = 0.75. Or remember: 3/4 = 75/100 = 0.75.',
            explanationOnWrong: '3 ÷ 4 = 0.75. You can also think: 3/4 = 75/100 (multiply top and bottom by 25), so 0.75.'
          }
        },
        {
          id: 'dec-004',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Adding and Subtracting Decimals',
            explanation: 'When you add or subtract decimals, always line up the decimal points. Then add or subtract as usual! 3.7 + 2.85 — line up the dots, add zeros to fill: 3.70 + 2.85 = 6.55. Think of it as keeping the dots perfectly stacked on top of each other.',
            visual: '<div class="decimal-calc"><pre>  3.70\n+ 2.85\n──────\n  6.55</pre></div>',
            visualAlt: 'Adding 3.7 and 2.85 with aligned decimals'
          }
        },
        {
          id: 'dec-p004',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'Calculate: 5.4 + 3.86',
            questionType: 'multiple-choice',
            options: ['8.26', '9.26', '8.86', '9.16'],
            correct: ['9.26'],
            acceptMultiple: false,
            hint: 'Line up the decimals! 5.40 + 3.86. Add column by column from right to left.',
            explanationOnCorrect: 'Well done! 5.40 + 3.86 = 9.26. Always line up your decimal points!',
            explanationOnWrong: 'Line up: 5.40 + 3.86. Hundredths: 0+6=6. Tenths: 4+8=12, write 2 carry 1. Ones: 5+3+1=9. Answer: 9.26.'
          }
        },
        {
          id: 'dec-005',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Multiplying Decimals',
            explanation: 'To multiply decimals: ignore the dots and multiply as whole numbers. Then count all decimal places in your original numbers — put that many decimal places in your answer! 2.5 × 0.4: multiply 25 × 4 = 100. Two decimal places total → 1.00 = 1.0.',
            visual: '<div class="mult-dec">2.5 × 0.4<br>→ 25 × 4 = 100<br>→ 2 decimal places<br>→ <strong>1.00 = 1</strong></div>',
            visualAlt: 'Multiplying decimals method'
          }
        },
        {
          id: 'dec-p005',
          type: 'practice',
          difficulty: 3,
          content: {
            question: '0.3 × 0.6 = ?',
            questionType: 'multiple-choice',
            options: ['0.18', '1.8', '0.018', '18'],
            correct: ['0.18'],
            acceptMultiple: false,
            hint: '3 × 6 = 18. Now count decimal places: 0.3 has one, 0.6 has one. Total = 2 places.',
            explanationOnCorrect: 'Perfect! 3 × 6 = 18. Two decimal places total → 0.18.',
            explanationOnWrong: 'Multiply: 3 × 6 = 18. Count decimal places: 1 + 1 = 2 total. So the answer is 0.18.'
          }
        },
        {
          id: 'dec-p006',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'You run 1.25 km every day for 5 days. How many km did you run in total?',
            questionType: 'multiple-choice',
            options: ['5.25 km', '6.25 km', '6.50 km', '7.25 km'],
            correct: ['6.25 km'],
            acceptMultiple: false,
            hint: '1.25 × 5. Ignore the decimal: 125 × 5 = 625. Now put back 2 decimal places.',
            explanationOnCorrect: 'Fantastic! 1.25 × 5 = 6.25 km. 125 × 5 = 625 → 2 decimal places → 6.25!',
            explanationOnWrong: '1.25 × 5: multiply 125 × 5 = 625. Two decimal places: 6.25 km.'
          }
        }
      ]
    },

    // ─── TOPIC 4: PERCENTAGES (Grade 6, Difficulty 3) ────────────────────────
    percentages: {
      id: 'percentages',
      name: 'Percentages',
      icon: '💯',
      gradeLevel: 'Grade 6',
      difficulty: 3,
      color: '#10b981',
      description: 'Understand percentages and unlock real-world math power!',
      cards: [
        {
          id: 'pct-001',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'What Is a Percent?',
            explanation: 'Percent means "out of 100." The symbol % is short for "/100." So 45% means 45 out of 100, or 45/100, or 0.45. If you score 80% on a test, you got 80 out of every 100 points correct. Percentages appear everywhere — sales, batteries, weather, sports stats!',
            visual: '<div class="percent-vis">80% = 80/100 = 0.80<br><div class="percent-bar"><div class="percent-fill" style="width:80%">80%</div></div></div>',
            visualAlt: 'Percentage bar showing 80%'
          }
        },
        {
          id: 'pct-002',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Converting Between Percent, Fraction, Decimal',
            explanation: 'These three forms all describe the same amount! To convert percent to decimal: divide by 100 (move the dot two places left). 75% → 0.75. To decimal to percent: multiply by 100. 0.35 → 35%. Fraction to percent: divide top by bottom, then × 100.',
            visual: '<div class="convert-table"><div>75% = 75/100 = 0.75</div><div>50% = 1/2 = 0.5</div><div>25% = 1/4 = 0.25</div><div>10% = 1/10 = 0.1</div></div>',
            visualAlt: 'Percent, fraction, decimal conversion table'
          }
        },
        {
          id: 'pct-p001',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'Write 35% as a decimal.',
            questionType: 'multiple-choice',
            options: ['35.0', '3.5', '0.35', '0.035'],
            correct: ['0.35'],
            acceptMultiple: false,
            hint: 'Divide by 100 OR move the decimal point two places to the LEFT.',
            explanationOnCorrect: 'Correct! 35% ÷ 100 = 0.35. Moving the dot left: 35. → 3.5 → 0.35.',
            explanationOnWrong: '35% → divide by 100 → 0.35. Move the decimal point two places left: 35. → 0.35.'
          }
        },
        {
          id: 'pct-p002',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'Write 3/5 as a percent.',
            questionType: 'multiple-choice',
            options: ['35%', '53%', '60%', '30%'],
            correct: ['60%'],
            acceptMultiple: false,
            hint: 'Divide top by bottom: 3 ÷ 5 = 0.6. Then multiply by 100.',
            explanationOnCorrect: 'Right! 3 ÷ 5 = 0.6. Then 0.6 × 100 = 60%.',
            explanationOnWrong: '3 ÷ 5 = 0.6. Multiply by 100 to get percent: 0.6 × 100 = 60%.'
          }
        },
        {
          id: 'pct-003',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Finding a Percent of a Number',
            explanation: 'To find a percent of a number, convert the percent to a decimal and multiply! What is 30% of 200? → 0.30 × 200 = 60. What is 15% of 80? → 0.15 × 80 = 12. A quick trick: 10% of any number = move the decimal one place left!',
            visual: '<div class="pct-calc">25% of 200<br>= 0.25 × 200<br>= <strong>50</strong></div>',
            visualAlt: 'Finding 25% of 200'
          }
        },
        {
          id: 'pct-p003',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'What is 40% of 150?',
            questionType: 'multiple-choice',
            options: ['40', '50', '60', '75'],
            correct: ['60'],
            acceptMultiple: false,
            hint: 'Convert 40% to 0.40. Then multiply: 0.40 × 150.',
            explanationOnCorrect: 'Nice! 0.40 × 150 = 60. Or: 10% of 150 = 15, and 40% = 4 × 15 = 60.',
            explanationOnWrong: '40% = 0.40. Then 0.40 × 150 = 60. Quick check: 10% of 150 = 15, so 40% = 4 × 15 = 60.'
          }
        },
        {
          id: 'pct-p004',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'A video game costs $60. There is a 25% discount. What is the sale price?',
            questionType: 'multiple-choice',
            options: ['$25', '$35', '$40', '$45'],
            correct: ['$45'],
            acceptMultiple: false,
            hint: 'First find 25% of $60 (the discount). Then subtract from $60.',
            explanationOnCorrect: 'Great job! 25% of 60 = 0.25 × 60 = $15 discount. $60 − $15 = $45!',
            explanationOnWrong: 'Find the discount: 25% × $60 = $15. Subtract: $60 − $15 = $45 sale price.'
          }
        },
        {
          id: 'pct-004',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Percent Change — Going Up or Down',
            explanation: 'Percent change shows how much something increased or decreased. Formula: (New − Old) ÷ Old × 100%. If a score went from 40 to 50: (50 − 40) ÷ 40 × 100% = 10 ÷ 40 × 100% = 25% increase! If a price drops from $80 to $60: (60 − 80) ÷ 80 × 100% = −25% (decrease).',
            visual: '<div class="pct-change">Percent Change = <br><strong>(New − Old) ÷ Old × 100%</strong><br><small>Positive = increase | Negative = decrease</small></div>',
            visualAlt: 'Percent change formula'
          }
        },
        {
          id: 'pct-p005',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'A plant grew from 20 cm to 25 cm. What is the percent increase?',
            questionType: 'multiple-choice',
            options: ['5%', '20%', '25%', '50%'],
            correct: ['25%'],
            acceptMultiple: false,
            hint: 'Percent change = (New − Old) ÷ Old × 100%. New = 25, Old = 20.',
            explanationOnCorrect: '(25 − 20) ÷ 20 × 100% = 5 ÷ 20 × 100% = 0.25 × 100% = 25% increase!',
            explanationOnWrong: '(25 − 20) ÷ 20 × 100 = 5 ÷ 20 × 100 = 0.25 × 100 = 25% increase.'
          }
        },
        {
          id: 'pct-p006',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'A shirt was $40. After a sale it costs $32. What percent was the discount?',
            questionType: 'multiple-choice',
            options: ['8%', '15%', '20%', '25%'],
            correct: ['20%'],
            acceptMultiple: false,
            hint: 'The discount is $40 − $32 = $8. What percent is $8 of $40?',
            explanationOnCorrect: '(32 − 40) ÷ 40 × 100 = −8 ÷ 40 × 100 = −20%. That\'s a 20% discount!',
            explanationOnWrong: 'Discount = 40 − 32 = $8. Percent = 8 ÷ 40 × 100 = 20%. The shirt was 20% off!'
          }
        }
      ]
    },

    // ─── TOPIC 5: RATIOS & RATES (Grade 6-7, Difficulty 3-4) ─────────────────
    ratios: {
      id: 'ratios',
      name: 'Ratios & Rates',
      icon: '⚖️',
      gradeLevel: 'Grade 6–7',
      difficulty: 3,
      color: '#8b5cf6',
      description: 'Compare quantities and solve real-world proportion problems!',
      cards: [
        {
          id: 'rat-001',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'What Is a Ratio?',
            explanation: 'A ratio compares two quantities. If there are 3 red balls and 5 blue balls, the ratio of red to blue is 3:5. You can also write it as 3/5 or "3 to 5." Ratios are everywhere: recipes use them (2 cups flour to 1 cup sugar), maps, and even music!',
            visual: '<div class="ratio-vis">🔴🔴🔴 to 🔵🔵🔵🔵🔵<br><br>Ratio = 3 : 5</div>',
            visualAlt: '3 red to 5 blue showing ratio 3:5'
          }
        },
        {
          id: 'rat-p001',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'In a class, there are 12 girls and 8 boys. What is the ratio of girls to boys in simplest form?',
            questionType: 'multiple-choice',
            options: ['12:8', '3:2', '2:3', '4:3'],
            correct: ['3:2'],
            acceptMultiple: false,
            hint: 'Simplify 12:8 by dividing both numbers by their GCF (4).',
            explanationOnCorrect: 'Correct! 12 ÷ 4 = 3 and 8 ÷ 4 = 2. Simplified ratio: 3:2.',
            explanationOnWrong: 'GCF of 12 and 8 is 4. Divide both: 12÷4 = 3, 8÷4 = 2. Simplified: 3:2.'
          }
        },
        {
          id: 'rat-002',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Unit Rates — Price Per One Item',
            explanation: 'A unit rate tells you "how much per ONE unit." If 5 apples cost $2, the unit rate is $2 ÷ 5 = $0.40 per apple. If you drive 150 miles in 3 hours, your speed is 150 ÷ 3 = 50 miles per hour. The word "per" is the clue that you need a unit rate!',
            visual: '<div class="unit-rate">150 miles in 3 hours<br>→ 150 ÷ 3 = <strong>50 miles per hour</strong></div>',
            visualAlt: 'Unit rate calculation'
          }
        },
        {
          id: 'rat-p002',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'A pack of 8 water bottles costs $4. What is the cost per bottle?',
            questionType: 'multiple-choice',
            options: ['$0.40', '$0.50', '$0.60', '$0.75'],
            correct: ['$0.50'],
            acceptMultiple: false,
            hint: 'Divide the total cost by the number of bottles: $4 ÷ 8.',
            explanationOnCorrect: '$4 ÷ 8 = $0.50 per bottle. Unit rates help compare prices easily!',
            explanationOnWrong: '$4 ÷ 8 = $0.50. Each bottle costs 50 cents. Divide total by number of items for unit rate.'
          }
        },
        {
          id: 'rat-003',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Proportions — Two Equal Ratios',
            explanation: 'A proportion says two ratios are equal. If 3/5 = x/20, you can solve for x by cross-multiplying: 3 × 20 = 5 × x → 60 = 5x → x = 12. Proportions are used in cooking (scaling recipes), maps (1 inch = 50 miles), and science experiments!',
            visual: '<div class="proportion">3/5 = x/20<br>3 × 20 = 5 × x<br>60 = 5x<br>x = <strong>12</strong></div>',
            visualAlt: 'Solving a proportion'
          }
        },
        {
          id: 'rat-p003',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Solve: 4/6 = x/18',
            questionType: 'multiple-choice',
            options: ['8', '10', '12', '9'],
            correct: ['12'],
            acceptMultiple: false,
            hint: 'Cross multiply: 4 × 18 = 6 × x. Then solve for x.',
            explanationOnCorrect: '4 × 18 = 72. So 6x = 72, and x = 72 ÷ 6 = 12!',
            explanationOnWrong: 'Cross multiply: 4 × 18 = 6 × x → 72 = 6x → x = 72 ÷ 6 = 12.'
          }
        },
        {
          id: 'rat-004',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Scale Factors and Maps',
            explanation: 'A scale factor lets you make models bigger or smaller. A map might use 1 inch = 50 miles. If two cities are 4 inches apart on the map, the real distance is 4 × 50 = 200 miles! Scale factors are used in architecture, model making, and video game design.',
            visual: '<div class="scale-vis">Map: 1 inch = 50 miles<br>Distance on map: 3 inches<br>Real distance = 3 × 50 = <strong>150 miles</strong></div>',
            visualAlt: 'Scale map example'
          }
        },
        {
          id: 'rat-p004',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'A model car is built at a scale of 1:20. The real car is 3.6 meters long. How long is the model (in cm)?',
            questionType: 'multiple-choice',
            options: ['18 cm', '180 cm', '72 cm', '36 cm'],
            correct: ['18 cm'],
            acceptMultiple: false,
            hint: '3.6 m = 360 cm. Divide by the scale factor 20: 360 ÷ 20.',
            explanationOnCorrect: '360 cm ÷ 20 = 18 cm. The model is 18 cm long!',
            explanationOnWrong: 'Convert: 3.6 m = 360 cm. Scale 1:20 means divide by 20: 360 ÷ 20 = 18 cm.'
          }
        },
        {
          id: 'rat-p005',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'A recipe uses 2 cups of flour for every 3 cups of sugar. How many cups of flour are needed for 9 cups of sugar?',
            questionType: 'multiple-choice',
            options: ['4', '5', '6', '7'],
            correct: ['6'],
            acceptMultiple: false,
            hint: 'Set up a proportion: 2/3 = x/9. Cross multiply to solve.',
            explanationOnCorrect: '2/3 = x/9 → 2 × 9 = 3 × x → 18 = 3x → x = 6 cups of flour!',
            explanationOnWrong: 'Proportion: 2/3 = x/9. Cross multiply: 2 × 9 = 18 = 3x. Divide: x = 6 cups flour.'
          }
        }
      ]
    },

    // ─── TOPIC 6: GEOMETRY (Grade 6-7, Difficulty 3-4) ───────────────────────
    geometry: {
      id: 'geometry',
      name: 'Geometry',
      icon: '📐',
      gradeLevel: 'Grade 6–7',
      difficulty: 3,
      color: '#ef4444',
      description: 'Discover the math of shapes, space, and the world around you!',
      cards: [
        {
          id: 'geo-001',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Perimeter — The Distance Around',
            explanation: 'Perimeter is the total distance around the outside of a shape. To find it, add up ALL the side lengths! A rectangle with length 8 and width 5 has perimeter = 8 + 5 + 8 + 5 = 26. Or use the shortcut: P = 2 × (length + width).',
            visual: '<div class="geo-shape"><div class="rect-vis" style="width:120px;height:60px;border:3px solid #6366f1;display:inline-block;"></div><br><small>8 + 5 + 8 + 5 = 26</small></div>',
            visualAlt: 'Rectangle showing perimeter'
          }
        },
        {
          id: 'geo-p001',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'Find the perimeter of a rectangle with length 12 m and width 7 m.',
            questionType: 'multiple-choice',
            options: ['19 m', '38 m', '84 m', '26 m'],
            correct: ['38 m'],
            acceptMultiple: false,
            hint: 'P = 2 × (length + width) = 2 × (12 + 7).',
            explanationOnCorrect: '2 × (12 + 7) = 2 × 19 = 38 m. You walked 38 meters around!',
            explanationOnWrong: 'P = 2 × (l + w) = 2 × (12 + 7) = 2 × 19 = 38 m.'
          }
        },
        {
          id: 'geo-002',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Area of Rectangles and Squares',
            explanation: 'Area measures the space INSIDE a shape — like how much carpet covers a floor! Area of a rectangle = length × width. A room that is 6 m × 4 m has area = 24 m². The unit is always "squared" (m², cm²) because area is two-dimensional.',
            visual: '<div class="area-vis">A = length × width<br>= 6 × 4 = <strong>24 m²</strong><br><div class="grid-vis">▪▪▪▪▪▪<br>▪▪▪▪▪▪<br>▪▪▪▪▪▪<br>▪▪▪▪▪▪</div></div>',
            visualAlt: 'Rectangle area grid'
          }
        },
        {
          id: 'geo-p002',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'A bedroom floor is 5 m long and 4 m wide. What is its area?',
            questionType: 'multiple-choice',
            options: ['9 m²', '18 m²', '20 m²', '25 m²'],
            correct: ['20 m²'],
            acceptMultiple: false,
            hint: 'Area = length × width. Multiply 5 by 4.',
            explanationOnCorrect: '5 × 4 = 20 m². That\'s 20 squares of carpet you would need!',
            explanationOnWrong: 'Area = 5 × 4 = 20 m².'
          }
        },
        {
          id: 'geo-003',
          type: 'concept',
          difficulty: 3,
          content: {
            title: 'Area of Triangles',
            explanation: 'A triangle is exactly HALF of a rectangle! If you had a rectangle with the same base and height, the triangle takes up half its area. Area of a triangle = (base × height) ÷ 2. Remember: the height must be PERPENDICULAR (straight up) to the base!',
            visual: '<div class="tri-vis">A = (base × height) ÷ 2<br>= (10 × 6) ÷ 2<br>= 60 ÷ 2 = <strong>30 cm²</strong></div>',
            visualAlt: 'Triangle area formula'
          }
        },
        {
          id: 'geo-p003',
          type: 'practice',
          difficulty: 3,
          content: {
            question: 'A triangle has base 8 cm and height 9 cm. What is its area?',
            questionType: 'multiple-choice',
            options: ['36 cm²', '72 cm²', '17 cm²', '32 cm²'],
            correct: ['36 cm²'],
            acceptMultiple: false,
            hint: 'Area = (base × height) ÷ 2. Multiply then divide by 2.',
            explanationOnCorrect: '(8 × 9) ÷ 2 = 72 ÷ 2 = 36 cm². Half the rectangle!',
            explanationOnWrong: '(8 × 9) ÷ 2 = 72 ÷ 2 = 36 cm².'
          }
        },
        {
          id: 'geo-004',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Area of a Circle — Enter Pi!',
            explanation: 'A circle\'s area uses the magical number π (pi) ≈ 3.14. Area = π × r², where r is the radius (distance from center to edge). A circle with radius 5 cm has area = 3.14 × 5² = 3.14 × 25 = 78.5 cm². Pi shows up in everything circular — wheels, planets, even pizza!',
            visual: '<div class="circle-vis">🟣<br>A = π × r²<br>r = 5 → A = 3.14 × 25 = <strong>78.5 cm²</strong></div>',
            visualAlt: 'Circle area formula'
          }
        },
        {
          id: 'geo-p004',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'What is the area of a circle with radius 6 cm? (Use π ≈ 3.14)',
            questionType: 'multiple-choice',
            options: ['18.84 cm²', '37.68 cm²', '113.04 cm²', '226.08 cm²'],
            correct: ['113.04 cm²'],
            acceptMultiple: false,
            hint: 'A = π × r² = 3.14 × 6². Calculate 6² first, then multiply by 3.14.',
            explanationOnCorrect: '3.14 × 6² = 3.14 × 36 = 113.04 cm². Nicely done!',
            explanationOnWrong: 'A = π × r² = 3.14 × 36 = 113.04 cm². Remember: square the radius first!'
          }
        },
        {
          id: 'geo-005',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Volume — How Much Can It Hold?',
            explanation: 'Volume measures the 3D space INSIDE an object — like how much water a box can hold! Volume of a rectangular box = length × width × height. A box that is 4 cm × 3 cm × 5 cm holds 4 × 3 × 5 = 60 cm³. Volume is measured in "cubed" units (cm³, m³).',
            visual: '<div class="vol-vis">V = l × w × h<br>= 4 × 3 × 5<br>= <strong>60 cm³</strong></div>',
            visualAlt: 'Rectangular prism volume'
          }
        },
        {
          id: 'geo-p005',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'A fish tank is 50 cm long, 30 cm wide, and 40 cm tall. What is its volume?',
            questionType: 'multiple-choice',
            options: ['120 cm³', '6,000 cm³', '60,000 cm³', '1,200 cm³'],
            correct: ['60,000 cm³'],
            acceptMultiple: false,
            hint: 'V = length × width × height = 50 × 30 × 40.',
            explanationOnCorrect: '50 × 30 × 40 = 60,000 cm³. That\'s 60 liters of water!',
            explanationOnWrong: 'V = 50 × 30 × 40 = 60,000 cm³ (= 60 liters). Multiply all three dimensions!'
          }
        }
      ]
    },

    // ─── TOPIC 7: ALGEBRA BASICS (Grade 7, Difficulty 4) ─────────────────────
    algebra: {
      id: 'algebra',
      name: 'Algebra Basics',
      icon: '🔭',
      gradeLevel: 'Grade 7',
      difficulty: 4,
      color: '#f97316',
      description: 'Solve mysteries using variables — the superpower of mathematics!',
      cards: [
        {
          id: 'alg-001',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Variables — Mystery Boxes',
            explanation: 'A variable is a letter that stands for an unknown number — like a mystery box! We often use x, y, or n. When we write x + 5 = 9, we ask: "What number plus 5 equals 9?" That\'s x = 4. Variables let us write rules that work for ANY number — the heart of algebra!',
            visual: '<div class="var-vis">x + 5 = 9<br>🔲 + 5 = 9<br>🔲 = 4<br><small>x is the mystery number!</small></div>',
            visualAlt: 'Variable as mystery box'
          }
        },
        {
          id: 'alg-002',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Writing Algebraic Expressions',
            explanation: '"5 more than a number" → x + 5. "A number times 3" → 3x (the × sign is often left out). "A number divided by 4" → x/4. "Three times a number minus 2" → 3x − 2. Translating words into expressions is a key algebra skill. It is like learning a new language!',
            visual: '<div class="expr-table"><div>"5 more than x" → x + 5</div><div>"twice a number" → 2x</div><div>"half of x" → x/2</div><div>"3 less than x" → x − 3</div></div>',
            visualAlt: 'Word to expression examples'
          }
        },
        {
          id: 'alg-p001',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Evaluate 4x + 3 when x = 5.',
            questionType: 'multiple-choice',
            options: ['12', '20', '23', '27'],
            correct: ['23'],
            acceptMultiple: false,
            hint: 'Replace x with 5: 4 × 5 + 3. Remember order of operations — multiply first!',
            explanationOnCorrect: '4 × 5 + 3 = 20 + 3 = 23. You substituted and simplified!',
            explanationOnWrong: 'Substitute x = 5: 4 × 5 + 3 = 20 + 3 = 23. Multiply before adding!'
          }
        },
        {
          id: 'alg-003',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Solving One-Step Equations',
            explanation: 'To solve an equation, "undo" what was done to the variable. If x + 7 = 15, undo the "+7" by subtracting 7 from BOTH sides: x = 15 − 7 = 8. If 4x = 28, undo the "×4" by dividing both sides by 4: x = 7. Whatever you do to one side, ALWAYS do to the other!',
            visual: '<div class="eq-solve">x + 7 = 15<br>− 7 &nbsp; − 7<br>──────────<br>x = <strong>8</strong></div>',
            visualAlt: 'One-step equation solving'
          }
        },
        {
          id: 'alg-p002',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Solve for x: x + 13 = 28',
            questionType: 'multiple-choice',
            options: ['x = 41', 'x = 15', 'x = 14', 'x = 17'],
            correct: ['x = 15'],
            acceptMultiple: false,
            hint: 'Subtract 13 from both sides: x = 28 − 13.',
            explanationOnCorrect: '28 − 13 = 15. So x = 15. Check: 15 + 13 = 28 ✓',
            explanationOnWrong: 'Subtract 13 from both sides: x = 28 − 13 = 15. Check: 15 + 13 = 28 ✓'
          }
        },
        {
          id: 'alg-p003',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Solve for x: 5x = 45',
            questionType: 'multiple-choice',
            options: ['x = 5', 'x = 9', 'x = 8', 'x = 40'],
            correct: ['x = 9'],
            acceptMultiple: false,
            hint: 'Divide both sides by 5: x = 45 ÷ 5.',
            explanationOnCorrect: '45 ÷ 5 = 9. So x = 9. Check: 5 × 9 = 45 ✓',
            explanationOnWrong: 'Divide both sides by 5: x = 45 ÷ 5 = 9. Check: 5 × 9 = 45 ✓'
          }
        },
        {
          id: 'alg-004',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Solving Two-Step Equations',
            explanation: 'For 2x + 3 = 11, you need two steps. Step 1: Undo the "+3" first by subtracting 3: 2x = 8. Step 2: Undo the "×2" by dividing by 2: x = 4. Always work in reverse order of operations — undo addition/subtraction first, then multiplication/division!',
            visual: '<div class="eq-solve">2x + 3 = 11<br>Step 1: − 3 both sides → 2x = 8<br>Step 2: ÷ 2 both sides → x = <strong>4</strong></div>',
            visualAlt: 'Two-step equation'
          }
        },
        {
          id: 'alg-p004',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Solve for x: 3x + 5 = 20',
            questionType: 'multiple-choice',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 8'],
            correct: ['x = 5'],
            acceptMultiple: false,
            hint: 'Step 1: subtract 5. Step 2: divide by 3.',
            explanationOnCorrect: '3x = 20 − 5 = 15. Then x = 15 ÷ 3 = 5. Check: 3×5+5 = 20 ✓',
            explanationOnWrong: 'Step 1: 3x = 20 − 5 = 15. Step 2: x = 15 ÷ 3 = 5.'
          }
        },
        {
          id: 'alg-p005',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'You and 3 friends share the cost of a pizza equally. Each person pays $6. Write an equation and find the total cost.',
            questionType: 'multiple-choice',
            options: ['$18', '$20', '$24', '$28'],
            correct: ['$24'],
            acceptMultiple: false,
            hint: 'Let t = total cost. Equation: t ÷ 4 = 6. Solve for t.',
            explanationOnCorrect: 't ÷ 4 = 6 → t = 6 × 4 = $24. The pizza costs $24 total!',
            explanationOnWrong: 'Equation: t ÷ 4 = 6. Multiply both sides by 4: t = 24. The pizza costs $24.'
          }
        },
        {
          id: 'alg-p006',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Solve for x: 4x − 7 = 21',
            questionType: 'multiple-choice',
            options: ['x = 6', 'x = 7', 'x = 8', 'x = 14'],
            correct: ['x = 7'],
            acceptMultiple: false,
            hint: 'Step 1: add 7 to both sides. Step 2: divide by 4.',
            explanationOnCorrect: '4x = 21 + 7 = 28. Then x = 28 ÷ 4 = 7. Check: 4×7−7 = 21 ✓',
            explanationOnWrong: 'Add 7: 4x = 28. Divide by 4: x = 7. Always check your answer!'
          }
        }
      ]
    },

    // ─── TOPIC 8: STATISTICS (Grade 7-8, Difficulty 4) ───────────────────────
    statistics: {
      id: 'statistics',
      name: 'Statistics',
      icon: '📊',
      gradeLevel: 'Grade 7–8',
      difficulty: 4,
      color: '#0ea5e9',
      description: 'Analyze data and uncover hidden patterns in the world!',
      cards: [
        {
          id: 'stat-001',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Mean — The Fairest Share',
            explanation: 'The mean (average) is what you get if you share everything equally. To find it: add all the numbers, then divide by how many numbers there are! Scores: 6, 8, 10, 12, 14. Sum = 50. There are 5 scores. Mean = 50 ÷ 5 = 10. The mean "balances" all the values!',
            visual: '<div class="stat-vis">6 + 8 + 10 + 12 + 14 = 50<br>50 ÷ 5 = <strong>10</strong> (mean)</div>',
            visualAlt: 'Calculating the mean'
          }
        },
        {
          id: 'stat-p001',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Find the mean of: 4, 7, 13, 8, 8',
            questionType: 'multiple-choice',
            options: ['7', '8', '9', '10'],
            correct: ['8'],
            acceptMultiple: false,
            hint: 'Add all numbers: 4 + 7 + 13 + 8 + 8 = ? Then divide by 5.',
            explanationOnCorrect: '4 + 7 + 13 + 8 + 8 = 40. Then 40 ÷ 5 = 8. The mean is 8!',
            explanationOnWrong: 'Sum = 4+7+13+8+8 = 40. Divide by 5 (number of values): 40 ÷ 5 = 8.'
          }
        },
        {
          id: 'stat-002',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Median — The Middle Value',
            explanation: 'The median is the middle value when numbers are sorted from least to greatest! For 3, 5, 7, 9, 11 — the middle is 7. For an even count of numbers (like 4, 6, 8, 10), find the average of the two middle numbers: (6+8) ÷ 2 = 7. Median is useful when outliers would skew the mean.',
            visual: '<div class="stat-vis">2, 3, 7, 9, 11<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br>Median = <strong>7</strong></div>',
            visualAlt: 'Finding the median'
          }
        },
        {
          id: 'stat-p002',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Find the median of: 3, 7, 2, 9, 5 (sort first!)',
            questionType: 'multiple-choice',
            options: ['5', '7', '3', '9'],
            correct: ['5'],
            acceptMultiple: false,
            hint: 'Sort the numbers from least to greatest first: 2, 3, 5, 7, 9. Now find the middle!',
            explanationOnCorrect: 'Sorted: 2, 3, 5, 7, 9. The middle (3rd of 5) is 5!',
            explanationOnWrong: 'Sort first: 2, 3, 5, 7, 9. There are 5 numbers, so the middle one (3rd) is 5.'
          }
        },
        {
          id: 'stat-003',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Mode and Range',
            explanation: 'MODE is the most common value in a data set. In 4, 7, 4, 9, 4, 7 — the number 4 appears 3 times, so the mode is 4. RANGE is the difference between the largest and smallest values. Largest: 9, Smallest: 4. Range = 9 − 4 = 5. A small range means data is clustered together!',
            visual: '<div class="stat-vis">4, 7, 4, 9, 4, 7<br>Mode = <strong>4</strong> (appears 3 times)<br>Range = 9 − 4 = <strong>5</strong></div>',
            visualAlt: 'Mode and range example'
          }
        },
        {
          id: 'stat-p003',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Find the mode of: 12, 8, 15, 8, 12, 8, 20',
            questionType: 'multiple-choice',
            options: ['12', '8', '20', '15'],
            correct: ['8'],
            acceptMultiple: false,
            hint: 'Count how many times each number appears. Which appears most often?',
            explanationOnCorrect: '8 appears 3 times. 12 appears 2 times. Others appear once. Mode = 8!',
            explanationOnWrong: 'Count: 8 appears 3 times, 12 appears 2 times. Most frequent = mode = 8.'
          }
        },
        {
          id: 'stat-004',
          type: 'concept',
          difficulty: 4,
          content: {
            title: 'Basic Probability',
            explanation: 'Probability measures the chance of something happening. It is always between 0 (impossible) and 1 (certain). P(event) = (favorable outcomes) ÷ (total outcomes). If you roll a die: P(rolling a 3) = 1 ÷ 6. P(rolling an even number) = 3 ÷ 6 = 1/2. Probability is everywhere — weather, sports, games!',
            visual: '<div class="prob-vis">P(event) = <br>Favorable Outcomes ÷ Total Outcomes<br><br>P(rolling 4 on a die) = 1/6</div>',
            visualAlt: 'Probability formula'
          }
        },
        {
          id: 'stat-p004',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'A bag has 3 red marbles, 2 blue marbles, and 5 green marbles. What is P(picking a red marble)?',
            questionType: 'multiple-choice',
            options: ['1/3', '3/10', '3/7', '1/2'],
            correct: ['3/10'],
            acceptMultiple: false,
            hint: 'Total marbles = 3 + 2 + 5 = 10. Red marbles = 3. P = 3/10.',
            explanationOnCorrect: 'P(red) = 3/10. Total = 10 marbles, 3 are red!',
            explanationOnWrong: 'Total = 3+2+5 = 10. Red = 3. P(red) = 3/10.'
          }
        },
        {
          id: 'stat-p005',
          type: 'practice',
          difficulty: 4,
          content: {
            question: 'Test scores: 72, 85, 90, 90, 78. What is the range?',
            questionType: 'multiple-choice',
            options: ['8', '12', '18', '90'],
            correct: ['18'],
            acceptMultiple: false,
            hint: 'Range = highest score − lowest score.',
            explanationOnCorrect: '90 − 72 = 18. The scores vary by 18 points.',
            explanationOnWrong: 'Range = max − min = 90 − 72 = 18.'
          }
        }
      ]
    },

    // ─── TOPIC 9: ADVANCED ALGEBRA (Grade 8, Difficulty 4-5) ─────────────────
    'advanced-algebra': {
      id: 'advanced-algebra',
      name: 'Advanced Algebra',
      icon: '🌌',
      gradeLevel: 'Grade 8',
      difficulty: 5,
      color: '#7c3aed',
      description: 'Master linear equations, slope, and the language of the universe!',
      cards: [
        {
          id: 'adv-001',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'What Is Slope?',
            explanation: 'Slope measures how steep a line is. Slope = Rise ÷ Run — how much the line goes UP (rise) for every unit it moves RIGHT (run). From point (0, 1) to (2, 5): Rise = 5 − 1 = 4. Run = 2 − 0 = 2. Slope = 4 ÷ 2 = 2. A positive slope goes up. A negative slope goes down!',
            visual: '<div class="slope-vis">Slope = Rise/Run<br>(y₂ − y₁) / (x₂ − x₁)<br><br>(0,1) → (2,5)<br>= (5−1)/(2−0) = 4/2 = <strong>2</strong></div>',
            visualAlt: 'Slope calculation'
          }
        },
        {
          id: 'adv-p001',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Find the slope between points (1, 3) and (4, 9).',
            questionType: 'multiple-choice',
            options: ['1', '2', '3', '6'],
            correct: ['2'],
            acceptMultiple: false,
            hint: 'Slope = (y₂ − y₁) ÷ (x₂ − x₁). Subtract y-values, then x-values.',
            explanationOnCorrect: '(9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2. For every 1 step right, the line rises 2!',
            explanationOnWrong: 'Slope = (9−3)/(4−1) = 6/3 = 2. That means the line rises 2 for every 1 it goes right.'
          }
        },
        {
          id: 'adv-002',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'Slope-Intercept Form: y = mx + b',
            explanation: 'The equation y = mx + b tells you everything about a straight line! "m" is the slope (how steep). "b" is the y-intercept (where the line crosses the y-axis). For y = 3x + 2: the slope is 3 (rises 3 for each step right) and it crosses the y-axis at 2.',
            visual: '<div class="slope-intercept">y = mx + b<br><br>y = 3x + 2<br>m = 3 (slope)<br>b = 2 (y-intercept)</div>',
            visualAlt: 'Slope-intercept form'
          }
        },
        {
          id: 'adv-p002',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'In the equation y = 5x − 3, what is the slope and y-intercept?',
            questionType: 'multiple-choice',
            options: ['slope=3, y-int=−5', 'slope=5, y-int=−3', 'slope=−3, y-int=5', 'slope=−5, y-int=3'],
            correct: ['slope=5, y-int=−3'],
            acceptMultiple: false,
            hint: 'In y = mx + b, m is the number before x, and b is the constant at the end.',
            explanationOnCorrect: 'y = 5x − 3: m = 5 (slope), b = −3 (y-intercept). The line crosses y-axis at −3!',
            explanationOnWrong: 'y = mx + b form: m = 5 (coefficient of x), b = −3 (constant). Slope = 5, y-intercept = −3.'
          }
        },
        {
          id: 'adv-003',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'Solving Inequalities',
            explanation: 'Inequalities are like equations but instead of "=", they use <, >, ≤, ≥. Solve them just like equations, BUT: if you multiply or divide by a NEGATIVE number, FLIP the inequality sign! 3x + 2 > 11 → 3x > 9 → x > 3. All numbers greater than 3 are solutions!',
            visual: '<div class="ineq-vis">3x + 2 > 11<br>3x > 9<br>x > <strong>3</strong><br><small>Solution: all numbers greater than 3</small></div>',
            visualAlt: 'Solving an inequality'
          }
        },
        {
          id: 'adv-p003',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Solve: 2x + 5 ≤ 13',
            questionType: 'multiple-choice',
            options: ['x ≤ 4', 'x ≤ 9', 'x ≥ 4', 'x ≤ 3'],
            correct: ['x ≤ 4'],
            acceptMultiple: false,
            hint: 'Step 1: subtract 5. Step 2: divide by 2. The inequality direction stays the same here!',
            explanationOnCorrect: '2x ≤ 13 − 5 = 8. Then x ≤ 8 ÷ 2 = 4. All numbers up to 4 work!',
            explanationOnWrong: '2x ≤ 8 → x ≤ 4. Check: if x = 4, then 2(4)+5 = 13 ≤ 13. ✓'
          }
        },
        {
          id: 'adv-004',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'Systems of Equations — Two Lines Meet',
            explanation: 'A system of equations is two equations with two unknowns. The solution is the point where both lines cross! Substitution method: if y = x + 3 and y = 2x + 1, replace y in the second: x + 3 = 2x + 1 → x = 2. Then y = 2 + 3 = 5. Solution: (2, 5)!',
            visual: '<div class="system-vis">y = x + 3<br>y = 2x + 1<br><br>x + 3 = 2x + 1<br>x = 2, y = 5<br>Solution: <strong>(2, 5)</strong></div>',
            visualAlt: 'System of equations solution'
          }
        },
        {
          id: 'adv-p004',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Solve the system: y = x + 4 and y = 3x. Find x.',
            questionType: 'multiple-choice',
            options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
            correct: ['x = 2'],
            acceptMultiple: false,
            hint: 'Substitute: since y = 3x and y = x + 4, set 3x = x + 4.',
            explanationOnCorrect: '3x = x + 4 → 2x = 4 → x = 2. Then y = 3 × 2 = 6. Solution: (2, 6)!',
            explanationOnWrong: '3x = x + 4. Subtract x: 2x = 4. Divide by 2: x = 2.'
          }
        },
        {
          id: 'adv-p005',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Write an equation for a line with slope 4 and y-intercept −2.',
            questionType: 'multiple-choice',
            options: ['y = 2x − 4', 'y = 4x + 2', 'y = 4x − 2', 'y = −2x + 4'],
            correct: ['y = 4x − 2'],
            acceptMultiple: false,
            hint: 'Use y = mx + b. Here m = 4 (slope) and b = −2 (y-intercept).',
            explanationOnCorrect: 'y = mx + b = 4x + (−2) = 4x − 2. The line rises steeply and crosses at −2!',
            explanationOnWrong: 'y = mx + b. m = 4, b = −2. So y = 4x − 2.'
          }
        }
      ]
    },

    // ─── TOPIC 10: EXPONENTS (Grade 8, Difficulty 5) ─────────────────────────
    exponents: {
      id: 'exponents',
      name: 'Exponents & Scientific Notation',
      icon: '🚀',
      gradeLevel: 'Grade 8',
      difficulty: 5,
      color: '#ec4899',
      description: 'Harness the power of exponents to write astronomical numbers!',
      cards: [
        {
          id: 'exp-001',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'What Are Exponents?',
            explanation: 'An exponent tells you how many times to multiply a number by itself. 2³ means 2 × 2 × 2 = 8. The base (2) is what you multiply. The exponent (3) says how many times. Powers grow incredibly fast: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2¹⁰=1,024, 2²⁰=over 1 million!',
            visual: '<div class="exp-vis">2³ = 2 × 2 × 2 = <strong>8</strong><br>5² = 5 × 5 = <strong>25</strong><br>10³ = 10 × 10 × 10 = <strong>1,000</strong></div>',
            visualAlt: 'Exponent examples'
          }
        },
        {
          id: 'exp-p001',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Calculate: 3⁴',
            questionType: 'multiple-choice',
            options: ['12', '27', '64', '81'],
            correct: ['81'],
            acceptMultiple: false,
            hint: '3⁴ = 3 × 3 × 3 × 3. Multiply step by step!',
            explanationOnCorrect: '3 × 3 = 9, then 9 × 3 = 27, then 27 × 3 = 81. So 3⁴ = 81!',
            explanationOnWrong: '3⁴ = 3 × 3 × 3 × 3 = 9 × 9 = 81. Multiply in pairs!'
          }
        },
        {
          id: 'exp-002',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'Exponent Rules (Power Moves!)',
            explanation: 'When multiplying same bases: x³ × x⁵ = x⁸ (ADD the exponents). When dividing: x⁷ ÷ x³ = x⁴ (SUBTRACT). Power of a power: (x²)³ = x⁶ (MULTIPLY). Any base to the power 0 = 1: x⁰ = 1. These rules make working with very large and small numbers so much easier!',
            visual: '<div class="exp-rules"><div>x^a × x^b = x^(a+b)</div><div>x^a ÷ x^b = x^(a-b)</div><div>(x^a)^b = x^(a×b)</div><div>x^0 = 1</div></div>',
            visualAlt: 'Exponent rules'
          }
        },
        {
          id: 'exp-p002',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Simplify: x⁴ × x³',
            questionType: 'multiple-choice',
            options: ['x⁷', 'x¹²', 'x', 'x⁴³'],
            correct: ['x⁷'],
            acceptMultiple: false,
            hint: 'Same base, multiplying: ADD the exponents. 4 + 3 = ?',
            explanationOnCorrect: 'x⁴ × x³ = x^(4+3) = x⁷. Add exponents when multiplying same base!',
            explanationOnWrong: 'Multiply same base: add exponents. 4 + 3 = 7. Answer: x⁷.'
          }
        },
        {
          id: 'exp-003',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'Square Roots and Cube Roots',
            explanation: 'The square root asks: "What number times itself equals this?" √144 = 12 because 12 × 12 = 144. The cube root asks: "What number cubed equals this?" ∛27 = 3 because 3 × 3 × 3 = 27. Roots are the OPPOSITE of powers — just like division is the opposite of multiplication!',
            visual: '<div class="root-vis">√144 = 12 (since 12² = 144)<br>√64 = 8 (since 8² = 64)<br>∛27 = 3 (since 3³ = 27)<br>∛125 = 5 (since 5³ = 125)</div>',
            visualAlt: 'Square and cube roots'
          }
        },
        {
          id: 'exp-p003',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'What is √225?',
            questionType: 'multiple-choice',
            options: ['13', '14', '15', '16'],
            correct: ['15'],
            acceptMultiple: false,
            hint: 'Think: what number × itself = 225? Try 15 × 15.',
            explanationOnCorrect: '15 × 15 = 225, so √225 = 15!',
            explanationOnWrong: '15 × 15 = 225, so √225 = 15. Check perfect squares: 12²=144, 13²=169, 14²=196, 15²=225.'
          }
        },
        {
          id: 'exp-004',
          type: 'concept',
          difficulty: 5,
          content: {
            title: 'Scientific Notation — Taming Huge Numbers',
            explanation: 'Scientists write huge numbers in a shortcut form called scientific notation. The number 3,500,000 becomes 3.5 × 10⁶. The rule: one non-zero digit before the decimal, then × 10^(power). Moving the decimal left = positive power. 0.00045 = 4.5 × 10⁻⁴ (negative power for small numbers)!',
            visual: '<div class="sci-not">3,500,000 = 3.5 × 10⁶<br>0.00045 = 4.5 × 10⁻⁴<br>Speed of light = 3 × 10⁸ m/s</div>',
            visualAlt: 'Scientific notation examples'
          }
        },
        {
          id: 'exp-p004',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'Write 42,000,000 in scientific notation.',
            questionType: 'multiple-choice',
            options: ['42 × 10⁶', '4.2 × 10⁷', '4.2 × 10⁶', '0.42 × 10⁸'],
            correct: ['4.2 × 10⁷'],
            acceptMultiple: false,
            hint: 'Move the decimal so there is exactly one digit before it. Count how many places you moved.',
            explanationOnCorrect: '4.2 × 10⁷! Move the decimal 7 places left: 42,000,000. → 4.2000000. Power = 7.',
            explanationOnWrong: 'Put decimal after first digit: 4.2. Count moves from original: 7 places. So 4.2 × 10⁷.'
          }
        },
        {
          id: 'exp-p005',
          type: 'practice',
          difficulty: 5,
          content: {
            question: 'The Earth is about 1.5 × 10⁸ km from the Sun. How many km is that as a regular number?',
            questionType: 'multiple-choice',
            options: ['15,000,000 km', '150,000,000 km', '1,500,000 km', '1,500,000,000 km'],
            correct: ['150,000,000 km'],
            acceptMultiple: false,
            hint: '1.5 × 10⁸: move the decimal point 8 places to the right.',
            explanationOnCorrect: '1.5 × 10⁸ = 150,000,000 km. That\'s 150 million kilometers! Space is huge!',
            explanationOnWrong: '10⁸ = 100,000,000. So 1.5 × 10⁸ = 150,000,000 km. Move decimal 8 right.'
          }
        }
      ]
    }

  } // end topics
}; // end MathCurriculum
