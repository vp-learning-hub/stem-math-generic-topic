// MathQuest — Real-World Fact Cards
// One fact set per topic, inserted every 5 content cards

const MathFacts = {
  numbers: [
    {
      id: 'fact-num-001',
      type: 'fact',
      content: {
        hook: '🌌 Space Fact!',
        title: 'Numbers in the Universe',
        fact: 'The observable universe has about 10⁸⁰ atoms — that\'s a 1 followed by 80 zeros! Whole numbers let astronomers write and compare these mind-bending quantities. Without numbers, space science would be impossible.',
        conceptConnection: 'numbers',
        funQuestion: {
          text: 'If you wrote one zero per second, how many years would it take to write 80 zeros?',
          answer: 'Under a minute! 80 seconds. Big numbers can still be written quickly.',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-num-002',
      type: 'fact',
      content: {
        hook: '🎮 Gaming Fact!',
        title: 'Order of Operations in Video Games',
        fact: 'Video game engines calculate damage, physics, and AI every frame — using order of operations millions of times per second! A tiny bug in operator precedence once caused a famous game crash. PEMDAS keeps digital worlds from collapsing.',
        conceptConnection: 'order-of-operations',
        funQuestion: {
          text: 'A game runs at 60 frames per second. How many frames in 10 minutes?',
          answer: '60 × 600 = 36,000 frames!',
          isOptional: true
        }
      }
    }
  ],
  fractions: [
    {
      id: 'fact-frac-001',
      type: 'fact',
      content: {
        hook: '🚀 NASA Fact!',
        title: 'Fractions Launch Rockets',
        fact: 'NASA engineers use fractions to calculate exactly how much rocket fuel is needed. Too little = the rocket won\'t reach orbit. Too much = the rocket is too heavy to lift off! The Saturn V moon rocket used fractions of its total weight as fuel calculations.',
        conceptConnection: 'fractions',
        funQuestion: {
          text: 'A rocket tank holds 1,000 gallons and needs to be 7/10 full. How many gallons is that?',
          answer: '700 gallons! 1000 × 7/10 = 700.',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-frac-002',
      type: 'fact',
      content: {
        hook: '🍳 Kitchen Fact!',
        title: 'Fractions in Every Recipe',
        fact: 'Every recipe is basically a set of fractions! "3/4 cup of flour" and "1/2 teaspoon of salt." Professional chefs scale recipes up (×10 for a restaurant) or down (÷2 for fewer people) — that\'s equivalent fractions in action. Gordon Ramsay uses math every single day!',
        conceptConnection: 'equivalent-fractions',
        funQuestion: {
          text: 'A recipe needs 2/3 cup of sugar. If you double it, how much sugar do you need?',
          answer: '4/3 cups = 1 and 1/3 cups!',
          isOptional: true
        }
      }
    }
  ],
  decimals: [
    {
      id: 'fact-dec-001',
      type: 'fact',
      content: {
        hook: '🏃 Sports Fact!',
        title: 'Decimals Win Olympic Gold',
        fact: 'In the Olympics, races are timed to 0.001 seconds — that\'s thousandths of a decimal! In the 2008 Olympics, Michael Phelps won the 100m butterfly by just 0.01 seconds. Without decimals, we couldn\'t know who ACTUALLY won!',
        conceptConnection: 'decimal-place-value',
        funQuestion: {
          text: 'The world 100m sprint record is 9.58 seconds. How much faster is that than 10 seconds?',
          answer: '10 − 9.58 = 0.42 seconds faster!',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-dec-002',
      type: 'fact',
      content: {
        hook: '💻 Tech Fact!',
        title: 'Computers Love Decimals',
        fact: 'Your phone\'s GPS is accurate to within 3-5 meters because satellites calculate your position using decimals precise to many decimal places. GPS satellites are so accurate they even account for Einstein\'s theory of relativity — time runs slightly differently in orbit!',
        conceptConnection: 'decimal-operations',
        funQuestion: {
          text: 'A GPS is accurate to 3.5 meters. How many of YOUR footsteps is that approximately? (Assume each step = 0.7m)',
          answer: '3.5 ÷ 0.7 = 5 steps!',
          isOptional: true
        }
      }
    }
  ],
  percentages: [
    {
      id: 'fact-pct-001',
      type: 'fact',
      content: {
        hook: '🌍 Earth Fact!',
        title: 'Percentages Protect Our Planet',
        fact: 'Scientists say Earth\'s atmosphere is 78% nitrogen and 21% oxygen — and that tiny 1% of other gases includes CO₂, which affects the entire climate! Weather forecasters also use percentages: "60% chance of rain" means in 100 similar weather situations, it rained 60 times.',
        conceptConnection: 'percentages',
        funQuestion: {
          text: 'If a weather app shows 40% chance of rain for 5 days, on how many days would you EXPECT rain?',
          answer: '0.40 × 5 = 2 days!',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-pct-002',
      type: 'fact',
      content: {
        hook: '💰 Money Fact!',
        title: 'Percentages Make You Rich (or Poor)',
        fact: 'Bank interest is a percentage! If you put $1,000 in a savings account at 5% interest per year, after 10 years with compound interest you\'d have about $1,629 — without adding anything! But credit card debt at 20% can double what you owe in just a few years. Knowing percentages = financial superpower!',
        conceptConnection: 'percent-change',
        funQuestion: {
          text: 'You save $200 per month. After 6 months you\'ve saved $1,200. A sale gives you 25% off a $600 item. Can you afford it?',
          answer: '25% off = $150 discount. Sale price = $450. Yes, $1,200 > $450!',
          isOptional: true
        }
      }
    }
  ],
  ratios: [
    {
      id: 'fact-rat-001',
      type: 'fact',
      content: {
        hook: '🎵 Music Fact!',
        title: 'Ratios Create Beautiful Music',
        fact: 'Musical notes are literally ratios of vibrations! The note A above middle C vibrates at 440 Hz. The note an octave higher vibrates at exactly 880 Hz — a ratio of 2:1. Ancient Greeks discovered these ratios and called them "the music of the spheres." Every song you love is mathematics!',
        conceptConnection: 'ratios',
        funQuestion: {
          text: 'If a note vibrates at 330 Hz, and the octave above it vibrates at twice that rate, what is the higher note\'s frequency?',
          answer: '330 × 2 = 660 Hz!',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-rat-002',
      type: 'fact',
      content: {
        hook: '🏗️ Architecture Fact!',
        title: 'Proportions Build Skyscrapers',
        fact: 'Architects use ratios and proportions constantly! The Golden Ratio (approximately 1.618:1) appears in the Parthenon, the Eiffel Tower, and even your smartphone screen. Engineers use proportions to scale blueprints from 1:100 drawings to actual 100-meter-tall buildings!',
        conceptConnection: 'proportions',
        funQuestion: {
          text: 'A blueprint has scale 1:100. A wall is 5 cm on the blueprint. How tall is the real wall?',
          answer: '5 × 100 = 500 cm = 5 meters!',
          isOptional: true
        }
      }
    }
  ],
  geometry: [
    {
      id: 'fact-geo-001',
      type: 'fact',
      content: {
        hook: '🌐 Earth Fact!',
        title: 'Ancient Egyptians Used Geometry',
        fact: 'The Great Pyramid of Giza was built over 4,500 years ago — and its base is almost a perfect square (230.3m × 230.4m, within 0.04% accuracy)! Egyptian "rope stretchers" calculated area and perimeter to build perfectly. Geometry was literally used to build one of the seven wonders of the world!',
        conceptConnection: 'area-perimeter',
        funQuestion: {
          text: 'The Great Pyramid\'s base is about 230m × 230m. What is its approximate area?',
          answer: '230 × 230 = 52,900 m² — over 5 football fields!',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-geo-002',
      type: 'fact',
      content: {
        hook: '🥧 Pi Fact!',
        title: 'Pi is an Infinite Mystery',
        fact: 'Pi (π = 3.14159265...) has been calculated to over 100 TRILLION digits — and the digits never repeat or end! Pi shows up everywhere circles exist: wheels, planets, DNA spirals, even ripples in a pond. In 2021, a computer calculated 100 trillion digits of pi. It took 157 days!',
        conceptConnection: 'circles',
        funQuestion: {
          text: 'The first 10 digits of pi are 3.141592653. What is pi rounded to the nearest hundredth?',
          answer: '3.14! (look at the thousandths digit: 1 < 5, so round down)',
          isOptional: true
        }
      }
    }
  ],
  algebra: [
    {
      id: 'fact-alg-001',
      type: 'fact',
      content: {
        hook: '🤖 Robot Fact!',
        title: 'Algebra Programs Every Robot',
        fact: 'When a robot arm moves to pick up an object, it solves algebraic equations hundreds of times per second to figure out the right angle for each joint. Tesla\'s factory robots use thousands of equations simultaneously. Algebra is literally the language robots think in!',
        conceptConnection: 'equations',
        funQuestion: {
          text: 'A robot arm needs to move from position x = 3 to x = 11. If it moves at 2 units per second, how long does it take? (Hint: set up an equation!)',
          answer: '11 − 3 = 8 units. 8 ÷ 2 = 4 seconds.',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-alg-002',
      type: 'fact',
      content: {
        hook: '🧬 Science Fact!',
        title: 'Algebra Discovered DNA',
        fact: 'Rosalind Franklin used algebraic equations to analyze X-ray images of DNA in 1952. Her equations proved DNA was a double helix — a breakthrough that changed biology forever! Scientists still use algebra in every experiment to find unknown variables and test hypotheses.',
        conceptConnection: 'variables',
        funQuestion: {
          text: 'A bacteria population doubles every hour. If you start with 10 bacteria, write an expression for the count after h hours.',
          answer: '10 × 2^h (this is exponential growth!)',
          isOptional: true
        }
      }
    }
  ],
  statistics: [
    {
      id: 'fact-stat-001',
      type: 'fact',
      content: {
        hook: '⚽ Sports Fact!',
        title: 'Statistics Win Championships',
        fact: 'The Oakland A\'s baseball team revolutionized sports in 2002 by using statistics (Moneyball) to build a winning team on a small budget. They used average, median, and probability to find undervalued players. Now EVERY professional sports team employs statisticians to gain an edge!',
        conceptConnection: 'mean-median-mode',
        funQuestion: {
          text: 'A player\'s batting averages over 5 seasons: 0.285, 0.310, 0.295, 0.320, 0.265. What is their career mean average?',
          answer: '(0.285+0.310+0.295+0.320+0.265) ÷ 5 = 1.475 ÷ 5 = 0.295',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-stat-002',
      type: 'fact',
      content: {
        hook: '🎲 Game Fact!',
        title: 'Probability Powers Video Games',
        fact: 'In games like Minecraft, every block placement, mob spawn, and loot drop is determined by probability calculations! Game designers carefully tune these percentages — a rare sword might have a 0.5% drop chance, meaning on average you need 200 kills to find one. That\'s not luck — it\'s statistics!',
        conceptConnection: 'probability',
        funQuestion: {
          text: 'An item has a 10% drop chance. On average, how many tries until you get it?',
          answer: '1 ÷ 0.10 = 10 tries on average. (But you could get lucky on try 1!)',
          isOptional: true
        }
      }
    }
  ],
  'advanced-algebra': [
    {
      id: 'fact-adv-001',
      type: 'fact',
      content: {
        hook: '📡 Physics Fact!',
        title: 'Linear Equations Predicted Neptune',
        fact: 'In 1846, astronomer Urbain Le Verrier used linear equations to predict the existence of a PLANET that had never been seen! He noticed Uranus wasn\'t following its predicted orbit and used algebra to calculate where an undiscovered planet must be. That night, astronomers pointed their telescope to his calculated coordinates and found Neptune!',
        conceptConnection: 'linear-equations',
        funQuestion: {
          text: 'If y = 2x + 5 represents a satellite\'s trajectory, what is y when x = 100?',
          answer: 'y = 2(100) + 5 = 205 units from origin!',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-adv-002',
      type: 'fact',
      content: {
        hook: '📈 Economics Fact!',
        title: 'Slope Predicts Stock Markets',
        fact: 'Financial analysts use the slope of price graphs to predict trends. A positive slope means a stock is rising; negative means falling. The steeper the slope, the faster the change. Hedge funds use systems of equations to model how hundreds of variables affect markets simultaneously — making or losing millions based on slope calculations!',
        conceptConnection: 'slope',
        funQuestion: {
          text: 'A stock price follows y = 3x + 10 (x = weeks). What is the price after 8 weeks?',
          answer: 'y = 3(8) + 10 = 24 + 10 = $34!',
          isOptional: true
        }
      }
    }
  ],
  exponents: [
    {
      id: 'fact-exp-001',
      type: 'fact',
      content: {
        hook: '🦠 Biology Fact!',
        title: 'Exponential Growth and Viruses',
        fact: 'When a virus spreads, each infected person infects several others — that\'s exponential growth! If one person infects 2 others, and each infects 2 more: after just 30 rounds, that\'s 2³⁰ = over 1 BILLION infections. This is why scientists model epidemics with exponents, and why early action matters so much!',
        conceptConnection: 'exponents',
        funQuestion: {
          text: 'A virus doubles every day starting from 1 case. How many cases after 10 days?',
          answer: '2¹⁰ = 1,024 cases. After 20 days: 2²⁰ = 1,048,576!',
          isOptional: true
        }
      }
    },
    {
      id: 'fact-exp-002',
      type: 'fact',
      content: {
        hook: '🌌 Astronomy Fact!',
        title: 'Scientific Notation Measures the Universe',
        fact: 'The distance from Earth to the nearest star (Proxima Centauri) is 40,208,000,000,000 km. In scientific notation: 4.0208 × 10¹³ km. Without scientific notation, astronomers would spend hours writing zeros instead of doing science! The entire observable universe is about 8.8 × 10²³ km across.',
        conceptConnection: 'scientific-notation',
        funQuestion: {
          text: 'Light travels at 3 × 10⁸ meters per second. How many meters does light travel in 10 seconds?',
          answer: '3 × 10⁸ × 10 = 3 × 10⁹ = 3,000,000,000 meters!',
          isOptional: true
        }
      }
    }
  ]
};
