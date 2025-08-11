export const questionBank = {
  writing: [
    // Add 50+ writing questions here
    {
      id: 'w1',
      type: 'writing',
      question: 'Your actual question here',
      options: ['A', 'B', 'C', 'D'],
      correct: 0,  // 0=A, 1=B, 2=C, 3=D
      explanation: 'Why this is correct'
    },
    // ... more questions
  ],
  reading: [
    // Add 50+ reading questions
  ],
  reasoning: [
    // Pattern Recognition Questions (1-40)
    {
      id: 'rs1',
      type: 'reasoning',
      question: 'The drawings in the boxes follow a pattern. Which drawing continues the pattern? [Square rotates 90° clockwise each time]',
      options: ['Square at 270°', 'Square at 0°', 'Square at 180°', 'Square at 45°'],
      correct: 0,
      explanation: 'The square rotates 90 degrees clockwise in each step.'
    },
    {
      id: 'rs2',
      type: 'reasoning',
      question: 'What number comes next in the sequence: 2, 4, 8, 16, ?',
      options: ['20', '24', '32', '64'],
      correct: 2,
      explanation: 'Each number is doubled: 2×2=4, 4×2=8, 8×2=16, 16×2=32'
    },
    {
      id: 'rs3',
      type: 'reasoning',
      question: 'Find the missing number: 3, 6, 9, ?, 15',
      options: ['10', '11', '12', '13'],
      correct: 2,
      explanation: 'The pattern increases by 3 each time: 3, 6, 9, 12, 15'
    },
    {
      id: 'rs4',
      type: 'reasoning',
      question: 'If all roses are flowers, and some flowers are red, which must be true?',
      options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
      correct: 3,
      explanation: 'We cannot determine the color of roses from the given information.'
    },
    {
      id: 'rs5',
      type: 'reasoning',
      question: 'Which number is the odd one out: 15, 20, 25, 32, 35?',
      options: ['15', '20', '32', '35'],
      correct: 2,
      explanation: '32 is not divisible by 5, while all others are multiples of 5.'
    },
    {
      id: 'rs6',
      type: 'reasoning',
      question: 'Complete the pattern: 100, 90, 81, 73, ?',
      options: ['66', '65', '64', '63'],
      correct: 0,
      explanation: 'The differences decrease by 1 each time: -10, -9, -8, -7'
    },
    {
      id: 'rs7',
      type: 'reasoning',
      question: 'In a code, CAT = 24. What does DOG equal if each letter is worth its position in the alphabet?',
      options: ['26', '28', '30', '32'],
      correct: 0,
      explanation: 'D(4) + O(15) + G(7) = 26'
    },
    {
      id: 'rs8',
      type: 'reasoning',
      question: 'Which shape comes next: Circle, Square, Triangle, Circle, Square, ?',
      options: ['Circle', 'Square', 'Triangle', 'Pentagon'],
      correct: 2,
      explanation: 'The pattern repeats every three shapes: Circle, Square, Triangle'
    },
    {
      id: 'rs9',
      type: 'reasoning',
      question: 'Find the missing letter: A, C, E, G, ?',
      options: ['H', 'I', 'J', 'K'],
      correct: 1,
      explanation: 'The pattern skips one letter each time: A, (B), C, (D), E, (F), G, (H), I'
    },
    {
      id: 'rs10',
      type: 'reasoning',
      question: 'If 5 pencils cost $2.50, how much do 8 pencils cost?',
      options: ['$3.50', '$4.00', '$4.50', '$5.00'],
      correct: 1,
      explanation: 'Each pencil costs $0.50, so 8 pencils cost $4.00'
    },
    {
      id: 'rs11',
      type: 'reasoning',
      question: 'What is the next number: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '12', '13', '14'],
      correct: 2,
      explanation: 'Fibonacci sequence: each number is the sum of the two before it (5+8=13)'
    },
    {
      id: 'rs12',
      type: 'reasoning',
      question: 'If Monday is 1 and Friday is 5, what number is Wednesday?',
      options: ['2', '3', '4', '6'],
      correct: 1,
      explanation: 'Wednesday is the third day: Monday(1), Tuesday(2), Wednesday(3)'
    },
    {
      id: 'rs13',
      type: 'reasoning',
      question: 'Which is heavier: 1.5 kg of feathers or 1500 g of iron?',
      options: ['Feathers', 'Iron', 'Same weight', 'Cannot determine'],
      correct: 2,
      explanation: '1.5 kg = 1500 g, so they weigh the same'
    },
    {
      id: 'rs14',
      type: 'reasoning',
      question: 'Complete the analogy: Book is to Read as Song is to ?',
      options: ['Write', 'Listen', 'Dance', 'Play'],
      correct: 1,
      explanation: 'You read a book and listen to a song'
    },
    {
      id: 'rs15',
      type: 'reasoning',
      question: 'If a square has 4 sides and a pentagon has 5, how many sides does an octagon have?',
      options: ['6', '7', '8', '9'],
      correct: 2,
      explanation: 'An octagon has 8 sides (oct- means eight)'
    },
    {
      id: 'rs16',
      type: 'reasoning',
      question: 'Find the pattern: 2, 6, 12, 20, 30, ?',
      options: ['40', '42', '44', '46'],
      correct: 1,
      explanation: 'Pattern is n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42'
    },
    {
      id: 'rs17',
      type: 'reasoning',
      question: 'If COLD = 38, and HOT = 40, what does WARM equal? (A=1, B=2, etc.)',
      options: ['52', '54', '56', '58'],
      correct: 2,
      explanation: 'W(23) + A(1) + R(18) + M(13) = 56'
    },
    {
      id: 'rs18',
      type: 'reasoning',
      question: 'Which fraction is largest: 1/2, 3/5, 2/3, or 4/7?',
      options: ['1/2', '3/5', '2/3', '4/7'],
      correct: 2,
      explanation: '2/3 = 0.667, which is larger than 1/2=0.5, 3/5=0.6, and 4/7=0.571'
    },
    {
      id: 'rs19',
      type: 'reasoning',
      question: 'If today is Thursday, what day will it be in 10 days?',
      options: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
      correct: 1,
      explanation: '10 days = 1 week + 3 days, so Thursday + 3 days = Sunday'
    },
    {
      id: 'rs20',
      type: 'reasoning',
      question: 'Find the missing number in the grid: 2,4,6 | 3,6,9 | 4,8,?',
      options: ['10', '11', '12', '13'],
      correct: 2,
      explanation: 'Each row multiplies the first number by 1, 2, and 3: 4×3=12'
    },
    {
      id: 'rs21',
      type: 'reasoning',
      question: 'If a train leaves at 14:45 and arrives at 16:20, how long is the journey?',
      options: ['1 hour 25 minutes', '1 hour 35 minutes', '1 hour 45 minutes', '2 hours 5 minutes'],
      correct: 1,
      explanation: 'From 14:45 to 16:20 is 1 hour and 35 minutes'
    },
    {
      id: 'rs22',
      type: 'reasoning',
      question: 'Which word does not belong: Apple, Orange, Carrot, Banana?',
      options: ['Apple', 'Orange', 'Carrot', 'Banana'],
      correct: 2,
      explanation: 'Carrot is a vegetable, the others are fruits'
    },
    {
      id: 'rs23',
      type: 'reasoning',
      question: 'If 3 × ? = 21, and ? + 5 = 12, what is ?',
      options: ['5', '6', '7', '8'],
      correct: 2,
      explanation: 'Both equations give ? = 7 (3×7=21 and 7+5=12)'
    },
    {
      id: 'rs24',
      type: 'reasoning',
      question: 'Complete the sequence: 64, 32, 16, 8, ?',
      options: ['2', '3', '4', '6'],
      correct: 2,
      explanation: 'Each number is halved: 64÷2=32, 32÷2=16, 16÷2=8, 8÷2=4'
    },
    {
      id: 'rs25',
      type: 'reasoning',
      question: 'If North is 0°, East is 90°, what is Southwest?',
      options: ['180°', '225°', '270°', '315°'],
      correct: 1,
      explanation: 'Southwest is 225° (South=180° + 45° toward West)'
    },
    {
      id: 'rs26',
      type: 'reasoning',
      question: 'Find the pattern: J, F, M, A, M, J, J, ?',
      options: ['A', 'S', 'O', 'N'],
      correct: 0,
      explanation: 'First letters of months: January, February, March, April, May, June, July, August'
    },
    {
      id: 'rs27',
      type: 'reasoning',
      question: 'If a rectangle has a perimeter of 20cm and length of 6cm, what is its width?',
      options: ['2cm', '3cm', '4cm', '5cm'],
      correct: 2,
      explanation: 'Perimeter = 2(L+W), so 20 = 2(6+W), W = 4cm'
    },
    {
      id: 'rs28',
      type: 'reasoning',
      question: 'Which number is both even and a multiple of 3: 15, 18, 21, 25?',
      options: ['15', '18', '21', '25'],
      correct: 1,
      explanation: '18 is even (divisible by 2) and divisible by 3 (18÷3=6)'
    },
    {
      id: 'rs29',
      type: 'reasoning',
      question: 'If 5 workers can build a wall in 10 days, how long will 10 workers take?',
      options: ['2 days', '4 days', '5 days', '20 days'],
      correct: 2,
      explanation: 'Double the workers means half the time: 10÷2=5 days'
    },
    {
      id: 'rs30',
      type: 'reasoning',
      question: 'What comes next: 1, 4, 9, 16, 25, ?',
      options: ['30', '36', '40', '49'],
      correct: 1,
      explanation: 'Square numbers: 1², 2², 3², 4², 5², 6²=36'
    },
    {
      id: 'rs31',
      type: 'reasoning',
      question: 'If all birds can fly, and penguins are birds, what can we conclude?',
      options: ['Penguins can fly', 'The first statement is false', 'Penguins are not birds', 'No conclusion'],
      correct: 1,
      explanation: 'Since penguins cannot fly, the statement "all birds can fly" must be false'
    },
    {
      id: 'rs32',
      type: 'reasoning',
      question: 'Find the missing operator: 12 ? 3 = 4',
      options: ['+', '-', '×', '÷'],
      correct: 3,
      explanation: '12 ÷ 3 = 4'
    },
    {
      id: 'rs33',
      type: 'reasoning',
      question: 'If the day before yesterday was Sunday, what day is tomorrow?',
      options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      correct: 1,
      explanation: 'Day before yesterday (Sunday) → Yesterday (Monday) → Today (Tuesday) → Tomorrow (Wednesday)'
    },
    {
      id: 'rs34',
      type: 'reasoning',
      question: 'Which is the smallest: 0.5, 0.05, 0.55, 0.505?',
      options: ['0.5', '0.05', '0.55', '0.505'],
      correct: 1,
      explanation: '0.05 is the smallest (5 hundredths)'
    },
    {
      id: 'rs35',
      type: 'reasoning',
      question: 'Complete the analogy: Puppy is to Dog as Kitten is to ?',
      options: ['Mouse', 'Cat', 'Rabbit', 'Bird'],
      correct: 1,
      explanation: 'A puppy is a young dog, and a kitten is a young cat'
    },
    {
      id: 'rs36',
      type: 'reasoning',
      question: 'If FACE = 20 (F=6, A=1, C=3, E=5), what does HAND equal?',
      options: ['22', '24', '26', '28'],
      correct: 0,
      explanation: 'H(8) + A(1) + N(14) + D(4) = 22'
    },
    {
      id: 'rs37',
      type: 'reasoning',
      question: 'What is 25% of 80?',
      options: ['15', '20', '25', '30'],
      correct: 1,
      explanation: '25% = 1/4, and 80 ÷ 4 = 20'
    },
    {
      id: 'rs38',
      type: 'reasoning',
      question: 'If a shirt costs $30 after a 25% discount, what was the original price?',
      options: ['$35', '$37.50', '$40', '$45'],
      correct: 2,
      explanation: 'If $30 is 75% of the original price, then 100% = $30 ÷ 0.75 = $40'
    },
    {
      id: 'rs39',
      type: 'reasoning',
      question: 'Find the pattern: 3, 7, 15, 31, ?',
      options: ['47', '55', '63', '71'],
      correct: 2,
      explanation: 'Each number is double the previous plus 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63'
    },
    {
      id: 'rs40',
      type: 'reasoning',
      question: 'If 6 apples cost $3, how many apples can you buy for $5?',
      options: ['8', '9', '10', '12'],
      correct: 2,
      explanation: 'Each apple costs $0.50, so $5 buys 10 apples'
    },

    // Logical Reasoning Questions (41-80)
    {
      id: 'rs41',
      type: 'reasoning',
      question: 'Tom is taller than Sam. Sam is taller than Max. Who is the shortest?',
      options: ['Tom', 'Sam', 'Max', 'Cannot determine'],
      correct: 2,
      explanation: 'Tom > Sam > Max, so Max is the shortest'
    },
    {
      id: 'rs42',
      type: 'reasoning',
      question: 'If it takes 3 minutes to boil 1 egg, how long to boil 3 eggs together?',
      options: ['3 minutes', '6 minutes', '9 minutes', '12 minutes'],
      correct: 0,
      explanation: 'All eggs can boil at the same time, so still 3 minutes'
    },
    {
      id: 'rs43',
      type: 'reasoning',
      question: 'Which month has 28 days?',
      options: ['February', 'All months', 'February in leap years', 'None'],
      correct: 1,
      explanation: 'All months have at least 28 days'
    },
    {
      id: 'rs44',
      type: 'reasoning',
      question: 'If you overtake the person in 2nd place in a race, what position are you in?',
      options: ['1st', '2nd', '3rd', '4th'],
      correct: 1,
      explanation: 'You take their position, so you are now 2nd'
    },
    {
      id: 'rs45',
      type: 'reasoning',
      question: 'A farmer has 17 sheep. All but 9 die. How many are left?',
      options: ['8', '9', '17', '26'],
      correct: 1,
      explanation: 'All but 9 die means 9 survive'
    },
    {
      id: 'rs46',
      type: 'reasoning',
      question: 'If you rearrange the letters "CIFAIPC" you get the name of a(n):',
      options: ['City', 'Animal', 'Ocean', 'Country'],
      correct: 2,
      explanation: 'The letters rearrange to spell PACIFIC'
    },
    {
      id: 'rs47',
      type: 'reasoning',
      question: 'How many times can you subtract 10 from 100?',
      options: ['1', '9', '10', '11'],
      correct: 0,
      explanation: 'Only once. After that, you are subtracting from 90, not 100'
    },
    {
      id: 'rs48',
      type: 'reasoning',
      question: 'If 2 cats catch 2 mice in 2 minutes, how many cats catch 100 mice in 100 minutes?',
      options: ['2', '50', '100', '200'],
      correct: 0,
      explanation: 'The rate is 1 mouse per cat per 2 minutes. In 100 minutes, 2 cats catch 100 mice'
    },
    {
      id: 'rs49',
      type: 'reasoning',
      question: 'What has keys but no locks, space but no room, and you can enter but not go inside?',
      options: ['A house', 'A keyboard', 'A car', 'A safe'],
      correct: 1,
      explanation: 'A keyboard has keys, spacebar, and enter key'
    },
    {
      id: 'rs50',
      type: 'reasoning',
      question: 'If yesterday was Wednesday, what day will it be the day after tomorrow?',
      options: ['Friday', 'Saturday', 'Sunday', 'Monday'],
      correct: 1,
      explanation: 'Yesterday (Wed) → Today (Thu) → Tomorrow (Fri) → Day after tomorrow (Sat)'
    },
    {
      id: 'rs51',
      type: 'reasoning',
      question: 'Anna is 6 years old. Her brother is half her age. When Anna is 40, how old will her brother be?',
      options: ['20', '37', '40', '43'],
      correct: 1,
      explanation: 'Brother is 3 years younger (6÷2=3). When Anna is 40, brother is 37'
    },
    {
      id: 'rs52',
      type: 'reasoning',
      question: 'Which weighs more: a ton of bricks or a ton of feathers?',
      options: ['Bricks', 'Feathers', 'Same weight', 'Depends on volume'],
      correct: 2,
      explanation: 'Both weigh one ton, so they weigh the same'
    },
    {
      id: 'rs53',
      type: 'reasoning',
      question: 'If you have 3 apples and take away 2, how many do you have?',
      options: ['1', '2', '3', '5'],
      correct: 1,
      explanation: 'You took 2 apples, so you have 2'
    },
    {
      id: 'rs54',
      type: 'reasoning',
      question: 'What is the minimum number of colors needed to color a map so no adjacent regions share a color?',
      options: ['2', '3', '4', '5'],
      correct: 2,
      explanation: 'The four-color theorem states that 4 colors are sufficient for any map'
    },
    {
      id: 'rs55',
      type: 'reasoning',
      question: 'If a rooster lays an egg on top of a barn roof, which way will it roll?',
      options: ['Left', 'Right', 'Down', 'Roosters don\'t lay eggs'],
      correct: 3,
      explanation: 'Roosters are male chickens and don\'t lay eggs'
    },
    {
      id: 'rs56',
      type: 'reasoning',
      question: 'There are 5 apples and you take 3. How many do you have?',
      options: ['2', '3', '5', '8'],
      correct: 1,
      explanation: 'You took 3 apples, so you have 3'
    },
    {
      id: 'rs57',
      type: 'reasoning',
      question: 'If there are 12 fish and 5 drown, how many are left?',
      options: ['5', '7', '12', 'Fish don\'t drown'],
      correct: 3,
      explanation: 'Fish live in water and cannot drown'
    },
    {
      id: 'rs58',
      type: 'reasoning',
      question: 'How many birthdays does the average person have?',
      options: ['1', '75', '365', 'Varies'],
      correct: 0,
      explanation: 'People only have one birthday - the day they were born'
    },
    {
      id: 'rs59',
      type: 'reasoning',
      question: 'If a doctor gives you 3 pills to take every half hour, how long will they last?',
      options: ['30 minutes', '1 hour', '1.5 hours', '2 hours'],
      correct: 1,
      explanation: 'Take 1st pill now, 2nd after 30 min, 3rd after 60 min = 1 hour total'
    },
    {
      id: 'rs60',
      type: 'reasoning',
      question: 'What gets wetter the more it dries?',
      options: ['Hair', 'A towel', 'Paint', 'Glue'],
      correct: 1,
      explanation: 'A towel gets wetter as it dries other things'
    },
    {
      id: 'rs61',
      type: 'reasoning',
      question: 'If you have a bowl with 6 apples and you take away 4, how many do you have?',
      options: ['2', '4', '6', '10'],
      correct: 1,
      explanation: 'You took 4 apples, so you have 4'
    },
    {
      id: 'rs62',
      type: 'reasoning',
      question: 'A man builds a house with all sides facing south. A bear walks by. What color is the bear?',
      options: ['Brown', 'Black', 'White', 'Cannot determine'],
      correct: 2,
      explanation: 'Only at the North Pole can all sides face south. Polar bears are white'
    },
    {
      id: 'rs63',
      type: 'reasoning',
      question: 'If you have only one match and enter a dark room with a candle, oil lamp, and heater, what do you light first?',
      options: ['Candle', 'Oil lamp', 'Heater', 'The match'],
      correct: 3,
      explanation: 'You must light the match first before lighting anything else'
    },
    {
      id: 'rs64',
      type: 'reasoning',
      question: 'How many letters are in the alphabet?',
      options: ['26', '11', '8', '24'],
      correct: 1,
      explanation: 'The phrase "the alphabet" has 11 letters'
    },
    {
      id: 'rs65',
      type: 'reasoning',
      question: 'If two\'s company and three\'s a crowd, what are four and five?',
      options: ['A party', 'A group', 'Nine', 'Too many'],
      correct: 2,
      explanation: 'Four and five equals nine (4+5=9)'
    },
    {
      id: 'rs66',
      type: 'reasoning',
      question: 'Before Mt. Everest was discovered, what was the highest mountain?',
      options: ['K2', 'Mt. Kilimanjaro', 'Mt. Everest', 'Unknown'],
      correct: 2,
      explanation: 'Mt. Everest was still the highest, just not yet discovered'
    },
    {
      id: 'rs67',
      type: 'reasoning',
      question: 'How many animals did Moses take on the ark?',
      options: ['2 of each', '7 pairs', '14 of each', 'None'],
      correct: 3,
      explanation: 'Noah, not Moses, took animals on the ark'
    },
    {
      id: 'rs68',
      type: 'reasoning',
      question: 'If a plane crashes on the border of two countries, where are survivors buried?',
      options: ['Country 1', 'Country 2', 'Both', 'Survivors aren\'t buried'],
      correct: 3,
      explanation: 'Survivors are alive and don\'t get buried'
    },
    {
      id: 'rs69',
      type: 'reasoning',
      question: 'How can a man go 8 days without sleep?',
      options: ['Coffee', 'Medication', 'Sleep during the day', 'Impossible'],
      correct: 2,
      explanation: 'He sleeps at night, not during the day'
    },
    {
      id: 'rs70',
      type: 'reasoning',
      question: 'If you divide 30 by half and add 10, what do you get?',
      options: ['25', '40', '70', '15'],
      correct: 2,
      explanation: 'Dividing by half means ×2, so 30÷0.5=60, then 60+10=70'
    },
    {
      id: 'rs71',
      type: 'reasoning',
      question: 'A clerk at a butcher shop is 5\'10" tall. What does he weigh?',
      options: ['150 lbs', '180 lbs', 'Meat', 'Cannot determine'],
      correct: 2,
      explanation: 'He weighs meat - that\'s his job at the butcher shop'
    },
    {
      id: 'rs72',
      type: 'reasoning',
      question: 'How far can you walk into a forest?',
      options: ['All the way', 'Halfway', 'Depends on size', 'Cannot determine'],
      correct: 1,
      explanation: 'After halfway, you\'re walking out of the forest'
    },
    {
      id: 'rs73',
      type: 'reasoning',
      question: 'If 5 machines make 5 widgets in 5 minutes, how long for 100 machines to make 100 widgets?',
      options: ['1 minute', '5 minutes', '100 minutes', '500 minutes'],
      correct: 1,
      explanation: 'Each machine makes 1 widget in 5 minutes, so 100 machines make 100 widgets in 5 minutes'
    },
    {
      id: 'rs74',
      type: 'reasoning',
      question: 'What word becomes shorter when you add two letters to it?',
      options: ['Long', 'Small', 'Short', 'Tiny'],
      correct: 2,
      explanation: 'Short + er = Shorter'
    },
    {
      id: 'rs75',
      type: 'reasoning',
      question: 'If you\'re in a race and pass the person in 3rd place, what place are you in?',
      options: ['1st', '2nd', '3rd', '4th'],
      correct: 2,
      explanation: 'You take their position, so you\'re now in 3rd place'
    },
    {
      id: 'rs76',
      type: 'reasoning',
      question: 'What can travel around the world while staying in a corner?',
      options: ['A bird', 'A stamp', 'A coin', 'A compass'],
      correct: 1,
      explanation: 'A stamp stays in the corner of an envelope while it travels'
    },
    {
      id: 'rs77',
      type: 'reasoning',
      question: 'If electric trains don\'t produce smoke, which way does the smoke blow?',
      options: ['Forward', 'Backward', 'Upward', 'No smoke'],
      correct: 3,
      explanation: 'Electric trains don\'t produce smoke'
    },
    {
      id: 'rs78',
      type: 'reasoning',
      question: 'What has hands but cannot clap?',
      options: ['A statue', 'A clock', 'A robot', 'A mannequin'],
      correct: 1,
      explanation: 'A clock has hands (hour and minute hands) but cannot clap'
    },    // Add 50+ reasoning questions
  ]
};