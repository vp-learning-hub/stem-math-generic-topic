# MathQuest

An interactive math learning platform for kids, covering Grade 4 through Grade 8. Built as a fully static site — no build tools, no npm, no frameworks. Works offline and deploys to GitHub Pages as-is.

## Features

- 10 progressive math topics from Numbers (Grade 4) to Exponents (Grade 8)
- 102 content cards + 20 real-world fact break cards
- Three card types: Concept lessons, Practice questions, Fact breaks
- Three question types: Multiple choice, Fill in the blank, True/False
- Gamification: streaks, points, 15 achievement badges
- Space theme — dark background, stars, purple/cyan palette
- Progress saved automatically via localStorage
- Works via `file://` locally or any static host

## Topics

| # | Topic | Grade |
|---|-------|-------|
| 1 | Numbers & Operations | 4–5 |
| 2 | Fractions | 5 |
| 3 | Decimals | 5–6 |
| 4 | Percentages | 6 |
| 5 | Ratios & Rates | 6–7 |
| 6 | Geometry | 6–7 |
| 7 | Algebra Basics | 7 |
| 8 | Statistics | 7–8 |
| 9 | Advanced Algebra | 8 |
| 10 | Exponents & Scientific Notation | 8 |

## Running locally

Open `index.html` in any browser — no server needed.

```
open index.html
```

## Deploying to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<user>.github.io/<repo>/`

## File structure

```
index.html          Landing page / topic selector
learn.html          Main learning interface
progress.html       Progress dashboard
css/
  main.css          Core styles + Space theme
  cards.css         Card-specific styles
  animations.css    Transitions and keyframes
js/
  app.js            Main app controller
  cards.js          Card rendering engine
  storage.js        localStorage wrapper
  achievements.js   Badge system + points
data/
  math-curriculum.js  All 10 topics and 102 cards
  math-facts.js       20 fact break cards
```
