export const levels = [
  {
    id: 'A1',
    status: 'Live now',
    focus: 'Daily survival Dutch',
    examGoal: 'Build enough command to handle introductions, shopping, transport, forms, and simple listening tasks.',
    progress: 100,
    modules: [
      'Alphabet and pronunciation shortcuts',
      'Personal pronouns and the verb "zijn"',
      'Articles: de, het, een',
      'Present tense word order',
      'Question forms and negation',
      'Numbers, dates, and time',
      'Essential exam listening patterns'
    ]
  },
  {
    id: 'A2',
    status: 'Live now',
    focus: 'Independent routine communication',
    examGoal: 'Move into short opinions, past events, work, health, housing, and more complex reading prompts.',
    progress: 100,
    modules: [
      'Past tense foundations',
      'Modal verbs in context',
      'Separable verbs',
      'Reflexive verbs and daily routines',
      'Practical writing for emails and appointments',
      'Longer listening with distractors'
    ]
  },
  {
    id: 'B1',
    status: 'Planned',
    focus: 'Confident real-life Dutch',
    examGoal: 'Handle opinion, comparison, and mid-length texts with control and speed.',
    progress: 8,
    modules: ['Roadmap only']
  },
  {
    id: 'B2',
    status: 'Planned',
    focus: 'Exam-ready fluency',
    examGoal: 'Reach strong reading, writing, and speaking performance with precision under pressure.',
    progress: 4,
    modules: ['Roadmap only']
  }
];

export const studyTracks = [
  {
    title: 'Grammar that scores',
    description: 'Short patterns, clear examples, and exam-style traps so learners stop translating word by word.',
    points: ['Sentence frame before vocabulary', 'Word order drills', 'High-frequency verb packs']
  },
  {
    title: 'Fast memorisation',
    description: 'Teach the memory tricks that make Dutch stick faster, especially for articles and fixed expressions.',
    points: ['Sound associations', 'Chunked phrases', 'Contrast pairs like niet vs geen']
  },
  {
    title: 'Exam cracking mode',
    description: 'Every topic points back to what usually appears in beginner Dutch exams and integration tracks.',
    points: ['Listening distractor patterns', 'Form-filling practice', 'Timed micro-quizzes']
  }
];

export const a1Lessons = [
  {
    title: 'Introduce yourself',
    outcome: 'Say your name, nationality, language, and where you live with correct verb placement.',
    pattern: 'Ik ben Rahul. Ik kom uit India. Ik woon in Amsterdam.',
    tip: 'Memorise complete chunks, not isolated words. Dutch exams reward automatic phrases.'
  },
  {
    title: 'Use de / het faster',
    outcome: 'Recognise common article patterns without freezing during reading tasks.',
    pattern: 'de man, de fiets, het huis, het meisje',
    tip: 'Learn nouns with their article as one unit. Treat "het huis" as a single memory card.'
  },
  {
    title: 'Ask survival questions',
    outcome: 'Form simple questions for directions, prices, and information desks.',
    pattern: 'Waar is het station? Hoe laat is het? Wat kost dit?',
    tip: 'Keep the question starters on loop: waar, hoe, wat, wanneer, waarom.'
  }
];

export const onboardingUnit = {
  id: 'a1-onboarding',
  day: 'Onboarding',
  theme: 'Your first Dutch words and sentences',
  grammar: 'ik / jij + ben / heb / woon',
  words: ['ik', 'jij', 'ben', 'heb', 'woon', 'huis', 'naam', 'Nederlands'],
  sentenceFrame: 'Ik ben ___. Ik heb ___. Ik woon in ___.',
  drills: [
    'Read the core words aloud slowly: ik, jij, ben, heb, woon.',
    'Build three tiny Dutch sentences with ik ben, ik heb, and ik woon.',
    'Repeat the pattern until you can say it without translating.'
  ],
  inburgeringExample: 'First survival output: say your name, where you live, and one thing you have.',
  winCondition: 'Learner can form three basic Dutch sentences with confidence.',
  exercises: [
    {
      id: 'onboarding-choice',
      type: 'choice',
      prompt: 'Choose the correct first sentence.',
      question: 'Which sentence is correct?',
      options: ['Ik ben Ana.', 'Ik Ana ben.', 'Ben ik Ana.'],
      answer: 0,
      hint: 'Start with subject, then verb.',
      explanation: '`Ik ben Ana` is the simplest correct Dutch sentence.'
    },
    {
      id: 'onboarding-fill',
      type: 'fillBlank',
      prompt: 'Complete the sentence.',
      question: 'Ik ___ in Amsterdam.',
      options: ['woon', 'bent', 'heb'],
      answer: 0,
      hint: 'Use the verb for where you live.',
      explanation: '`Ik woon in Amsterdam` is correct.'
    },
    {
      id: 'onboarding-order',
      type: 'order',
      prompt: 'Build the sentence.',
      question: 'Say: I have a house.',
      tokens: ['heb', 'een', 'huis', 'Ik'],
      answer: ['Ik', 'heb', 'een', 'huis'],
      hint: 'Subject first, verb second.',
      explanation: '`Ik heb een huis` is correct.'
    },
    {
      id: 'onboarding-writing',
      type: 'writing',
      prompt: 'Write one first Dutch line.',
      question: 'Write a short line with `ik ben` and your name.',
      minWords: 3,
      keywords: ['ik', 'ben'],
      hint: 'Example pattern: `Ik ben Ana`.',
      explanation: 'The goal is to make the first Dutch sentence feel easy and safe.'
    }
  ]
};

export const a1DailyFlow = [
  {
    id: 'a1-day-1',
    day: 'Day 1',
    theme: 'Who are you?',
    grammar: 'Personal pronouns + zijn',
    words: ['ik', 'jij', 'hij', 'zij', 'naam', 'land', 'taal', 'stad'],
    sentenceFrame: 'Ik ben ___. Ik kom uit ___. Ik spreek ___. Ik woon in ___.',
    drills: [
      'Say the full sentence aloud five times with your own details.',
      'Switch the subject: ik ben, jij bent, hij is, zij is.',
      'Write four introduction lines without translating from English first.'
    ],
    inburgeringExample: 'Speaking-style prompt: Vertel uw naam, land en woonplaats.',
    winCondition: 'Learner can introduce themselves in 20 seconds without pausing.',
    exercises: [
      {
        id: 'intro-word-order',
        type: 'choice',
        prompt: 'Choose the correct Dutch sentence.',
        question: 'How do you say "I am Ana" correctly?',
        options: ['Ik Ana ben.', 'Ik ben Ana.', 'Ben ik Ana.'],
        answer: 1,
        hint: 'In a main clause the conjugated verb is usually in second position.',
        explanation: '`Ik ben Ana` follows basic Dutch word order.'
      },
      {
        id: 'intro-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'Ik ___ Nederlands.',
        options: ['spreek', 'spreekt', 'spreken'],
        answer: 0,
        hint: 'Use the `ik` form.',
        explanation: '`Ik spreek Nederlands` is the correct A1 pattern.'
      },
      {
        id: 'intro-order',
        type: 'order',
        prompt: 'Build the sentence in the right order.',
        question: 'Say: I live in Amsterdam.',
        tokens: ['woon', 'Amsterdam', 'Ik', 'in'],
        answer: ['Ik', 'woon', 'in', 'Amsterdam'],
        hint: 'Start with the subject, then the verb.',
        explanation: '`Ik woon in Amsterdam` is the correct sentence.'
      },
      {
        id: 'intro-transform',
        type: 'transform',
        prompt: 'Transform the sentence.',
        question: 'Change `Ik ben Ana.` into `She is Ana.`',
        source: 'Ik ben Ana.',
        expected: 'Zij is Ana.',
        hint: 'Change both the pronoun and the verb form.',
        explanation: '`Zij is Ana.` uses the correct pronoun and form of `zijn`.'
      },
      {
        id: 'intro-writing',
        type: 'writing',
        prompt: 'Write a short self-introduction.',
        question: 'Write one short Dutch line introducing your name and where you live.',
        minWords: 4,
        keywords: ['ik', 'ben'],
        hint: 'A simple pattern is `Ik ben ... Ik woon in ...`.',
        explanation: 'A strong A1 answer includes a correct intro chunk with `ik ben`.'
      }
    ]
  },
  {
    id: 'a1-day-2',
    day: 'Day 2',
    theme: 'Home and family',
    grammar: 'de / het / een + simple possession',
    words: ['de vader', 'de moeder', 'het kind', 'het huis', 'de kamer', 'de tafel', 'de straat'],
    sentenceFrame: 'Dit is mijn ___. Ik heb een ___. Het ___ is groot.',
    drills: [
      'Study each noun with its article as one block.',
      'Build 10 short noun sentences with dit is, dat is, ik heb.',
      'Contrast de and het aloud before reading them in a sentence.'
    ],
    inburgeringExample: 'Reading-style prompt: Kies het juiste woord in een advertentie over een woning.',
    winCondition: 'Learner recalls 15 home words with articles and uses them in simple sentences.',
    exercises: [
      {
        id: 'home-article',
        type: 'choice',
        prompt: 'Pick the correct article.',
        question: 'Which option is correct?',
        options: ['de huis', 'het huis', 'de kind'],
        answer: 1,
        hint: 'Both `huis` and many diminutives use `het`.',
        explanation: '`Het huis` is correct.'
      },
      {
        id: 'family-fill',
        type: 'fillBlank',
        prompt: 'Complete the family sentence.',
        question: 'Dit is mijn ___.',
        options: ['moeder', 'moederen', 'moeders'],
        answer: 0,
        hint: 'Use the singular noun.',
        explanation: '`Dit is mijn moeder` is the natural sentence.'
      },
      {
        id: 'family-order',
        type: 'order',
        prompt: 'Put the words in order.',
        question: 'Say: The child is at home.',
        tokens: ['kind', 'thuis', 'is', 'Het'],
        answer: ['Het', 'kind', 'is', 'thuis'],
        hint: 'Dutch still follows subject-verb order here.',
        explanation: '`Het kind is thuis` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-3',
    day: 'Day 3',
    theme: 'Daily routine',
    grammar: 'Present tense regular verbs',
    words: ['werken', 'leren', 'wonen', 'koken', 'lopen', 'fietsen', 'slapen'],
    sentenceFrame: 'Ik werk vandaag. Jij leert Nederlands. Wij koken thuis.',
    drills: [
      'Conjugate one verb across ik, jij, hij/zij, wij.',
      'Turn single words into complete A1 sentences.',
      'Speak your daily routine using three time words: vandaag, morgen, nu.'
    ],
    inburgeringExample: 'Listening-style prompt: U hoort iemand praten over werk en tijden. Kies het goede antwoord.',
    winCondition: 'Learner can describe a normal day using 5 verbs correctly.',
    exercises: [
      {
        id: 'routine-choice',
        type: 'choice',
        prompt: 'Choose the right verb form.',
        question: 'Jij ___ Nederlands.',
        options: ['leer', 'leert', 'leren'],
        answer: 1,
        hint: '`Jij` often takes `-t` in present tense.',
        explanation: '`Jij leert Nederlands` is correct.'
      },
      {
        id: 'routine-fill',
        type: 'fillBlank',
        prompt: 'Complete the daily routine.',
        question: 'Wij ___ thuis.',
        options: ['koken', 'kookt', 'kook'],
        answer: 0,
        hint: 'Use the `wij` form.',
        explanation: '`Wij koken thuis` is correct.'
      },
      {
        id: 'routine-order',
        type: 'order',
        prompt: 'Build the correct sentence.',
        question: 'Say: I work today.',
        tokens: ['werk', 'vandaag', 'Ik'],
        answer: ['Ik', 'werk', 'vandaag'],
        hint: 'Subject first, verb second.',
        explanation: '`Ik werk vandaag` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-4',
    day: 'Day 4',
    theme: 'Shopping and money',
    grammar: 'Questions with wat / hoeveel / waar',
    words: ['de winkel', 'brood', 'melk', 'water', 'prijs', 'euro', 'goedkoop', 'duur'],
    sentenceFrame: 'Wat kost dit? Waar is de winkel? Hoeveel euro is dat?',
    drills: [
      'Repeat question starters in a fast loop.',
      'Role-play buyer and cashier with prices and quantities.',
      'Write a mini dialogue of three questions and three answers.'
    ],
    inburgeringExample: 'Speaking or listening prompt: Vraag naar de prijs of locatie in een winkel.',
    winCondition: 'Learner asks for price, quantity, and location without help.',
    exercises: [
      {
        id: 'shop-choice',
        type: 'choice',
        prompt: 'Choose the useful shop question.',
        question: 'How do you ask the price?',
        options: ['Wat kost dit?', 'Waar kost dit?', 'Hoe kost dit?'],
        answer: 0,
        hint: 'For price use `wat kost`.',
        explanation: '`Wat kost dit?` is the standard question.'
      },
      {
        id: 'shop-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'Waar is de ___?',
        options: ['winkel', 'winkelen', 'winkelt'],
        answer: 0,
        hint: 'You need a noun after the article.',
        explanation: '`Waar is de winkel?` is correct.'
      },
      {
        id: 'shop-order',
        type: 'order',
        prompt: 'Put the question in order.',
        question: 'Ask: How many euros is that?',
        tokens: ['Hoeveel', 'is', 'dat', 'euro'],
        answer: ['Hoeveel', 'euro', 'is', 'dat'],
        hint: 'Question word first.',
        explanation: '`Hoeveel euro is dat?` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-5',
    day: 'Day 5',
    theme: 'Time, dates, appointments',
    grammar: 'Numbers, days, clock times',
    words: ['maandag', 'dinsdag', 'uur', 'half', 'kwart', 'morgen', 'middag', 'afspraak'],
    sentenceFrame: 'De afspraak is op maandag om tien uur.',
    drills: [
      'Say the numbers 1 to 30 and key clock times aloud.',
      'Read and write five appointment lines.',
      'Answer simple scheduling questions using complete sentences.'
    ],
    inburgeringExample: 'Form or reading prompt: Vul datum, tijd en naam in.',
    winCondition: 'Learner understands common appointment language used in forms and messages.',
    exercises: [
      {
        id: 'time-choice',
        type: 'choice',
        prompt: 'Choose the correct appointment sentence.',
        question: 'Which sentence is correct?',
        options: [
          'De afspraak is op maandag om tien uur.',
          'De afspraak maandag is op tien uur.',
          'Op maandag tien uur de afspraak is.'
        ],
        answer: 0,
        hint: 'Keep the sentence frame simple.',
        explanation: '`De afspraak is op maandag om tien uur` is correct.'
      },
      {
        id: 'time-fill',
        type: 'fillBlank',
        prompt: 'Complete the schedule line.',
        question: 'De les is in de ___.',
        options: ['middag', 'uur', 'maandag'],
        answer: 0,
        hint: 'Think of a part of the day.',
        explanation: '`In de middag` is a common phrase.'
      },
      {
        id: 'time-order',
        type: 'order',
        prompt: 'Arrange the words.',
        question: 'Say: Tomorrow I have an appointment.',
        tokens: ['morgen', 'heb', 'ik', 'een', 'afspraak'],
        answer: ['Morgen', 'heb', 'ik', 'een', 'afspraak'],
        hint: 'After a time word, the verb still comes before the subject.',
        explanation: '`Morgen heb ik een afspraak` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-6',
    day: 'Day 6',
    theme: 'Negation and correction',
    grammar: 'niet vs geen',
    words: ['geen', 'niet', 'koffie', 'auto', 'tijd', 'probleem', 'open', 'gesloten'],
    sentenceFrame: 'Ik heb geen auto. De winkel is niet open.',
    drills: [
      'Sort 12 examples into geen or niet.',
      'Correct wrong sentences by speaking the right version.',
      'Write six negatives using a noun and six using an adjective or verb phrase.'
    ],
    inburgeringExample: 'Grammar trap common in beginner exams: select the correct negation in a short sentence.',
    winCondition: 'Learner chooses geen or niet correctly in most basic cases.',
    exercises: [
      {
        id: 'negation-choice',
        type: 'choice',
        prompt: 'Pick the correct negation.',
        question: 'Ik heb ___ auto.',
        options: ['niet', 'geen', 'nee'],
        answer: 1,
        hint: 'Negate an indefinite noun with `geen`.',
        explanation: '`Ik heb geen auto` is correct.'
      },
      {
        id: 'negation-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'De winkel is ___ open.',
        options: ['geen', 'niet', 'nee'],
        answer: 1,
        hint: 'This is not a noun phrase.',
        explanation: '`De winkel is niet open` is correct.'
      },
      {
        id: 'negation-order',
        type: 'order',
        prompt: 'Arrange the negative sentence.',
        question: 'Say: I do not have time.',
        tokens: ['heb', 'geen', 'tijd', 'Ik'],
        answer: ['Ik', 'heb', 'geen', 'tijd'],
        hint: 'Keep subject-verb order first.',
        explanation: '`Ik heb geen tijd` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-7',
    day: 'Day 7',
    theme: 'Transport and directions',
    grammar: 'Waar + prepositions of place',
    words: ['het station', 'de bus', 'de trein', 'links', 'rechts', 'rechtdoor', 'naast', 'tegenover'],
    sentenceFrame: 'Het station is naast de supermarkt. Ga rechtdoor en dan links.',
    drills: [
      'Ask and answer where places are using waar, naast, tegenover.',
      'Describe one route from home to the station in three sentences.',
      'Repeat direction phrases aloud until they feel automatic.'
    ],
    inburgeringExample: 'Listening prompt: U hoort een routebeschrijving. Kies de juiste locatie.',
    winCondition: 'Learner can ask for and understand simple directions.',
    exercises: [
      {
        id: 'transport-choice',
        type: 'choice',
        prompt: 'Choose the correct direction sentence.',
        question: 'Which sentence is correct?',
        options: [
          'Het station is naast de supermarkt.',
          'Het station naast is de supermarkt.',
          'Naast het station de supermarkt is.'
        ],
        answer: 0,
        hint: 'Keep the place phrase together.',
        explanation: '`Het station is naast de supermarkt` is correct.'
      },
      {
        id: 'transport-fill',
        type: 'fillBlank',
        prompt: 'Complete the route instruction.',
        question: 'Ga ___ en dan rechts.',
        options: ['rechtdoor', 'station', 'naast'],
        answer: 0,
        hint: 'Use the fixed route phrase.',
        explanation: '`Ga rechtdoor en dan rechts` is common route language.'
      },
      {
        id: 'transport-order',
        type: 'order',
        prompt: 'Arrange the question.',
        question: 'Ask: Where is the bus stop?',
        tokens: ['Waar', 'de', 'is', 'bushalte'],
        answer: ['Waar', 'is', 'de', 'bushalte'],
        hint: 'Question word first, verb second.',
        explanation: '`Waar is de bushalte?` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-8',
    day: 'Day 8',
    theme: 'Health and body',
    grammar: 'Ik heb ... / ik voel me ...',
    words: ['pijn', 'ziek', 'koorts', 'hoofdpijn', 'de dokter', 'het medicijn', 'beter', 'morgen'],
    sentenceFrame: 'Ik heb hoofdpijn. Ik voel me ziek. Ik wil naar de dokter.',
    drills: [
      'Describe three common health problems using ik heb or ik voel me.',
      'Practice asking for a doctor or medicine in short sentences.',
      'Read simple symptom phrases aloud with natural rhythm.'
    ],
    inburgeringExample: 'Speaking prompt: Zeg wat het probleem is en vraag om hulp.',
    winCondition: 'Learner can explain a basic health problem and ask for help.',
    exercises: [
      {
        id: 'health-a1-choice',
        type: 'choice',
        prompt: 'Choose the correct health sentence.',
        question: 'How do you say "I have a headache"?',
        options: ['Ik ben hoofdpijn.', 'Ik heb hoofdpijn.', 'Ik voel hoofdpijn.'],
        answer: 1,
        hint: 'For pain use `ik heb`.',
        explanation: '`Ik heb hoofdpijn` is correct.'
      },
      {
        id: 'health-a1-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'Ik voel me ___.',
        options: ['ziek', 'dokter', 'medicijn'],
        answer: 0,
        hint: 'Use an adjective here.',
        explanation: '`Ik voel me ziek` is correct.'
      },
      {
        id: 'health-a1-order',
        type: 'order',
        prompt: 'Put the words in order.',
        question: 'Say: I want to go to the doctor.',
        tokens: ['naar', 'wil', 'de', 'Ik', 'dokter', 'gaan'],
        answer: ['Ik', 'wil', 'naar', 'de', 'dokter', 'gaan'],
        hint: 'Second verb goes to the end.',
        explanation: '`Ik wil naar de dokter gaan` is correct.'
      },
      {
        id: 'health-a1-match',
        type: 'matching',
        prompt: 'Match the Dutch words to the English meaning.',
        question: 'Connect the health words correctly.',
        pairs: [
          ['hoofdpijn', 'headache'],
          ['de dokter', 'the doctor'],
          ['medicijn', 'medicine']
        ],
        hint: 'Match the most familiar practical health words first.',
        explanation: 'These are core A1 health words used in practical situations.'
      }
    ]
  },
  {
    id: 'a1-day-9',
    day: 'Day 9',
    theme: 'Work and school basics',
    grammar: 'hebben + noun phrases',
    words: ['werk', 'school', 'collega', 'leraar', 'les', 'pauze', 'beginnen', 'eindigen'],
    sentenceFrame: 'Ik heb werk om negen uur. De les begint om acht uur.',
    drills: [
      'Say when work or school starts and ends.',
      'Make six short sentences with heb and one work or school noun.',
      'Answer basic questions about job, lesson, and break times.'
    ],
    inburgeringExample: 'Reading prompt: Lees een kort rooster en kies het juiste tijdstip.',
    winCondition: 'Learner can talk about simple work and school routines.',
    exercises: [
      {
        id: 'work-a1-choice',
        type: 'choice',
        prompt: 'Choose the correct sentence.',
        question: 'Which sentence is correct?',
        options: ['Ik heb werk morgen.', 'Ik heb morgen werk.', 'Ik morgen heb werk.'],
        answer: 1,
        hint: 'Verb usually stays second.',
        explanation: '`Ik heb morgen werk` is correct.'
      },
      {
        id: 'work-a1-fill',
        type: 'fillBlank',
        prompt: 'Complete the school sentence.',
        question: 'De les ___ om acht uur.',
        options: ['begint', 'beginnen', 'begin'],
        answer: 0,
        hint: 'Singular subject takes `-t`.',
        explanation: '`De les begint om acht uur` is correct.'
      },
      {
        id: 'work-a1-order',
        type: 'order',
        prompt: 'Arrange the sentence.',
        question: 'Say: I have a break at noon.',
        tokens: ['pauze', 'Ik', 'heb', 'om', 'twaalf', 'uur'],
        answer: ['Ik', 'heb', 'pauze', 'om', 'twaalf', 'uur'],
        hint: 'Subject first, verb second.',
        explanation: '`Ik heb pauze om twaalf uur` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-10',
    day: 'Day 10',
    theme: 'Forms and personal data',
    grammar: 'Question-answer patterns for forms',
    words: ['adres', 'postcode', 'telefoonnummer', 'geboortedatum', 'voornaam', 'achternaam', 'nationaliteit', 'burgerlijke staat'],
    sentenceFrame: 'Mijn adres is ___. Mijn postcode is ___. Mijn telefoonnummer is ___.',
    drills: [
      'Read personal data aloud and spell it clearly.',
      'Practice answering form questions with complete short answers.',
      'Fill in a mock registration form without translating.'
    ],
    inburgeringExample: 'Reading and writing prompt: Vul een formulier in met persoonlijke gegevens.',
    winCondition: 'Learner can understand and complete simple personal forms.',
    exercises: [
      {
        id: 'form-choice',
        type: 'choice',
        prompt: 'Choose the correct form answer.',
        question: 'What matches the prompt `postcode`?',
        options: ['Mijn naam is Ana.', 'Mijn postcode is 1012 AB.', 'Ik woon in Utrecht.'],
        answer: 1,
        hint: 'Answer the exact information type asked.',
        explanation: '`Mijn postcode is 1012 AB` matches `postcode`.'
      },
      {
        id: 'form-fill',
        type: 'fillBlank',
        prompt: 'Complete the personal data sentence.',
        question: 'Mijn telefoonnummer is ___.',
        options: ['0612345678', 'Amsterdam', 'Spaans'],
        answer: 0,
        hint: 'A phone number is expected.',
        explanation: 'A number completes the sentence correctly.'
      },
      {
        id: 'form-order',
        type: 'order',
        prompt: 'Arrange the answer.',
        question: 'Say: My birth date is 12 May.',
        tokens: ['is', 'Mijn', 'geboortedatum', '12', 'mei'],
        answer: ['Mijn', 'geboortedatum', 'is', '12', 'mei'],
        hint: 'Use the same A1 answer frame.',
        explanation: '`Mijn geboortedatum is 12 mei` is correct.'
      }
    ]
  },
  {
    id: 'a1-day-11',
    day: 'Day 11',
    theme: 'Social contact and invitations',
    grammar: 'Can / want / with + simple invitation phrases',
    words: ['samen', 'komen', 'bezoeken', 'vanavond', 'morgen', 'feest', 'uitnodiging', 'vriend'],
    sentenceFrame: 'Wil je vanavond komen? Ja, ik kom graag. Sorry, ik kan niet komen.',
    drills: [
      'Invite someone in one short sentence and answer yes or no politely.',
      'Practice can and want with social plans: ik wil, jij wilt, ik kan niet.',
      'Read and repeat common invitation answers until they sound automatic.'
    ],
    inburgeringExample: 'Speaking prompt: Nodig iemand uit en reageer op een uitnodiging.',
    winCondition: 'Learner can invite someone and accept or refuse simply.',
    exercises: [
      {
        id: 'social-choice',
        type: 'choice',
        prompt: 'Choose the invitation sentence.',
        question: 'Which sentence is correct?',
        options: ['Wil je vanavond komen?', 'Wil jij komen vanavond kan?', 'Je wil komen vanavond?'],
        answer: 0,
        hint: 'Keep the invitation short and natural.',
        explanation: '`Wil je vanavond komen?` is correct.'
      },
      {
        id: 'social-fill',
        type: 'fillBlank',
        prompt: 'Complete the reply.',
        question: 'Sorry, ik ___ niet komen.',
        options: ['kan', 'wil', 'kom'],
        answer: 0,
        hint: 'Use the modal verb that expresses ability.',
        explanation: '`Sorry, ik kan niet komen` is correct.'
      },
      {
        id: 'social-order',
        type: 'order',
        prompt: 'Arrange the sentence.',
        question: 'Say: I will come tomorrow.',
        tokens: ['ik', 'kom', 'morgen', 'Ik'],
        answer: ['Ik', 'kom', 'morgen'],
        hint: 'Use one subject and one verb.',
        explanation: '`Ik kom morgen` is a correct simple answer.'
      }
    ]
  },
  {
    id: 'a1-day-12',
    day: 'Day 12',
    theme: 'Preferences, free time, and weather',
    grammar: 'houden van / graag / simple opinions',
    words: ['muziek', 'sport', 'regen', 'zon', 'warm', 'koud', 'graag', 'houden van'],
    sentenceFrame: 'Ik houd van muziek. Ik sport graag. Het is vandaag koud maar zonnig.',
    drills: [
      'Say what you like and do not like using one full sentence each.',
      'Describe the weather in two or three simple words.',
      'Connect free-time vocabulary to personal preferences using graag or houden van.'
    ],
    inburgeringExample: 'Speaking prompt: Vertel iets over wat u graag doet en hoe het weer is.',
    winCondition: 'Learner can describe simple preferences, hobbies, and weather.',
    exercises: [
      {
        id: 'preferences-choice',
        type: 'choice',
        prompt: 'Choose the correct preference sentence.',
        question: 'Which sentence is correct?',
        options: ['Ik houd van muziek.', 'Ik houd muziek van.', 'Ik van muziek houd.'],
        answer: 0,
        hint: 'Keep the fixed phrase together.',
        explanation: '`Ik houd van muziek` is correct.'
      },
      {
        id: 'preferences-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'Ik sport ___.',
        options: ['graag', 'regen', 'koud'],
        answer: 0,
        hint: 'Use the word that expresses enjoyment.',
        explanation: '`Ik sport graag` is correct.'
      },
      {
        id: 'preferences-match',
        type: 'matching',
        prompt: 'Match the Dutch weather words.',
        question: 'Connect each Dutch word to its meaning.',
        pairs: [
          ['regen', 'rain'],
          ['zon', 'sun'],
          ['koud', 'cold']
        ],
        hint: 'These are basic weather words used in daily conversation.',
        explanation: 'These words cover the most common A1 weather descriptions.'
      }
    ]
  }
];

export const a2Curriculum = [
  {
    id: 'a2-work',
    module: 'Work, study, and appointments',
    grammar: 'Modal verbs, polite requests, inversion',
    vocabulary: ['moeten', 'kunnen', 'mogen', 'afspraak', 'sollicitatie', 'opleiding'],
    sentenceFrame:
      'Ik kan morgen niet komen. Kunt u de afspraak verzetten? Ik moet om negen uur werken.',
    practiceSteps: [
      'Turn direct statements into polite questions.',
      'Practice inversion after time words: morgen kan ik, maandag moet ik.',
      'Write a short message to change an appointment.'
    ],
    sentenceGoal: 'Can request, confirm, and rearrange appointments in clear Dutch.',
    examLink: 'Useful for A2 speaking and writing tasks such as calling, short messages, and appointment forms.',
    exercises: [
      {
        id: 'a2-work-choice',
        type: 'choice',
        prompt: 'Choose the polite request.',
        question: 'Which sentence is best for changing an appointment?',
        options: [
          'Kunt u de afspraak verzetten?',
          'U verzet de afspraak?',
          'Verzetten de afspraak nu.'
        ],
        answer: 0,
        hint: 'A polite modal-question works best.',
        explanation: '`Kunt u de afspraak verzetten?` is clear and polite.'
      },
      {
        id: 'a2-work-fill',
        type: 'fillBlank',
        prompt: 'Complete the work message.',
        question: 'Ik ___ morgen niet komen.',
        options: ['kan', 'kunt', 'komen'],
        answer: 0,
        hint: 'Use the `ik` form of `kunnen`.',
        explanation: '`Ik kan morgen niet komen` is correct.'
      },
      {
        id: 'a2-work-order',
        type: 'order',
        prompt: 'Build the sentence.',
        question: 'Say: Tomorrow I have to work.',
        tokens: ['ik', 'moet', 'werken', 'Morgen'],
        answer: ['Morgen', 'moet', 'ik', 'werken'],
        hint: 'Time word first, verb second.',
        explanation: '`Morgen moet ik werken` is correct.'
      },
      {
        id: 'a2-work-transform',
        type: 'transform',
        prompt: 'Transform the sentence.',
        question: 'Change `Ik kan morgen komen.` into a negative sentence.',
        source: 'Ik kan morgen komen.',
        expected: 'Ik kan morgen niet komen.',
        hint: 'Insert the negation in the correct place.',
        explanation: '`Ik kan morgen niet komen.` is the correct negative sentence.'
      },
      {
        id: 'a2-work-match',
        type: 'matching',
        prompt: 'Match the Dutch phrase to its function.',
        question: 'Connect each phrase to the correct meaning.',
        pairs: [
          ['afspraak', 'appointment'],
          ['sollicitatie', 'job interview'],
          ['opleiding', 'training or education']
        ],
        hint: 'Focus on practical civic-integration vocabulary.',
        explanation: 'These are common work and administration words at A2.'
      }
    ]
  },
  {
    id: 'a2-past',
    module: 'Past events and experiences',
    grammar: 'Perfect tense with hebben/zijn',
    vocabulary: ['gewerkt', 'geweest', 'gekocht', 'verhuisd', 'begonnen', 'bezocht'],
    sentenceFrame:
      'Ik heb gisteren gewerkt. Wij zijn naar de stad geweest. Zij heeft een fiets gekocht.',
    practiceSteps: [
      'Sort verbs into hebben or zijn.',
      'Answer yesterday/last week questions with full sentences.',
      'Retell one short event using three perfect-tense verbs.'
    ],
    sentenceGoal: 'Can explain what happened yesterday, last week, or during a visit.',
    examLink: 'Supports A2 speaking answers and short writing tasks about daily life and experiences.',
    exercises: [
      {
        id: 'a2-past-choice',
        type: 'choice',
        prompt: 'Choose the correct perfect tense.',
        question: 'Which sentence is correct?',
        options: [
          'Ik heb gisteren gewerkt.',
          'Ik ben gisteren gewerkt.',
          'Ik heeft gisteren gewerkt.'
        ],
        answer: 0,
        hint: 'Most regular action verbs use `hebben`.',
        explanation: '`Ik heb gisteren gewerkt` is correct.'
      },
      {
        id: 'a2-past-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'Wij zijn naar de stad ___.',
        options: ['geweest', 'gewerkt', 'gekocht'],
        answer: 0,
        hint: 'Think of the verb `zijn` in the perfect tense.',
        explanation: '`Wij zijn naar de stad geweest` is correct.'
      },
      {
        id: 'a2-past-order',
        type: 'order',
        prompt: 'Put the past sentence in order.',
        question: 'Say: She bought a bike.',
        tokens: ['heeft', 'fiets', 'gekocht', 'Zij', 'een'],
        answer: ['Zij', 'heeft', 'een', 'fiets', 'gekocht'],
        hint: 'Past participle goes to the end.',
        explanation: '`Zij heeft een fiets gekocht` is correct.'
      }
    ]
  },
  {
    id: 'a2-health',
    module: 'Health and practical help',
    grammar: 'Reflexive verbs, imperatives, basic advice forms',
    vocabulary: ['de huisarts', 'pijn', 'ziek', 'beter', 'medicijn', 'afspraak maken'],
    sentenceFrame:
      'Ik voel me niet goed. U moet veel water drinken. Ik wil een afspraak maken bij de huisarts.',
    practiceSteps: [
      'Use zich/je correctly in short health sentences.',
      'Practice simple advice with moet and kan.',
      'Role-play a doctor appointment booking call.'
    ],
    sentenceGoal: 'Can describe a problem and understand simple instructions.',
    examLink: 'Matches common healthcare, service-desk, and listening situations in civic integration practice.',
    exercises: [
      {
        id: 'a2-health-choice',
        type: 'choice',
        prompt: 'Choose the right health sentence.',
        question: 'How do you say "I do not feel well"?',
        options: ['Ik voel me niet goed.', 'Ik voel niet me goed.', 'Ik ben niet voel goed.'],
        answer: 0,
        hint: 'Keep the reflexive pronoun next to the verb.',
        explanation: '`Ik voel me niet goed` is correct.'
      },
      {
        id: 'a2-health-fill',
        type: 'fillBlank',
        prompt: 'Complete the advice.',
        question: 'U moet veel water ___.',
        options: ['drinken', 'drinkt', 'gedronken'],
        answer: 0,
        hint: 'A modal verb is followed by the infinitive.',
        explanation: '`U moet veel water drinken` is correct.'
      },
      {
        id: 'a2-health-order',
        type: 'order',
        prompt: 'Arrange the appointment request.',
        question: 'Say: I want to make an appointment.',
        tokens: ['wil', 'een', 'Ik', 'maken', 'afspraak'],
        answer: ['Ik', 'wil', 'een', 'afspraak', 'maken'],
        hint: 'Keep the second verb at the end.',
        explanation: '`Ik wil een afspraak maken` is correct.'
      }
    ]
  },
  {
    id: 'a2-housing',
    module: 'Housing and neighbourhood',
    grammar: 'Prepositions of place, separable verbs, comparisons',
    vocabulary: ['de huur', 'de buren', 'verhuizen', 'opruimen', 'naast', 'tegenover'],
    sentenceFrame:
      'Ik woon naast de supermarkt. Wij ruimen het huis op. Deze woning is groter dan mijn oude huis.',
    practiceSteps: [
      'Describe locations using naast, tegenover, in, op.',
      'Split separable verbs in main clauses.',
      'Compare two homes using groter, kleiner, duurder.'
    ],
    sentenceGoal: 'Can read notices, describe where things are, and discuss basic housing issues.',
    examLink: 'Useful for reading notices, advertisements, and answering location-based questions.',
    exercises: [
      {
        id: 'a2-housing-choice',
        type: 'choice',
        prompt: 'Choose the correct location phrase.',
        question: 'Which sentence is correct?',
        options: [
          'Ik woon naast de supermarkt.',
          'Ik woon de supermarkt naast.',
          'Ik naast woon de supermarkt.'
        ],
        answer: 0,
        hint: 'Preposition stays with the place phrase.',
        explanation: '`Ik woon naast de supermarkt` is correct.'
      },
      {
        id: 'a2-housing-fill',
        type: 'fillBlank',
        prompt: 'Complete the comparison.',
        question: 'Deze woning is ___ dan mijn oude huis.',
        options: ['groter', 'groot', 'grootst'],
        answer: 0,
        hint: 'A comparison with `dan` needs the comparative form.',
        explanation: '`Groter dan` is correct.'
      },
      {
        id: 'a2-housing-order',
        type: 'order',
        prompt: 'Put the separable verb in order.',
        question: 'Say: We clean up the house.',
        tokens: ['ruimen', 'het', 'wij', 'op', 'huis'],
        answer: ['Wij', 'ruimen', 'het', 'huis', 'op'],
        hint: 'The prefix moves to the end in a main clause.',
        explanation: '`Wij ruimen het huis op` is correct.'
      }
    ]
  },
  {
    id: 'a2-travel',
    module: 'Travel and transport',
    grammar: 'Word order with time-place, past and present contrast',
    vocabulary: ['de trein', 'het station', 'te laat', 'vertrekken', 'aankomen', 'overstappen'],
    sentenceFrame:
      'De trein vertrekt om acht uur van spoor drie. Gisteren kwam ik te laat aan op het station.',
    practiceSteps: [
      'Build time-place sentences with transport vocabulary.',
      'Switch one message from present to past tense.',
      'Answer travel questions with platform, time, and destination.'
    ],
    sentenceGoal: 'Can ask for directions, report delays, and understand simple travel announcements.',
    examLink: 'Directly relevant to listening and reading prompts about routes, times, and transport changes.',
    exercises: [
      {
        id: 'a2-travel-choice',
        type: 'choice',
        prompt: 'Choose the correct station sentence.',
        question: 'Which sentence is correct?',
        options: [
          'De trein vertrekt om acht uur van spoor drie.',
          'De trein om acht uur vertrekt van spoor drie.',
          'Vertrekt de trein van spoor drie om acht uur.'
        ],
        answer: 0,
        hint: 'This is a neutral information sentence, not a question.',
        explanation: '`De trein vertrekt om acht uur van spoor drie` is correct.'
      },
      {
        id: 'a2-travel-fill',
        type: 'fillBlank',
        prompt: 'Complete the message.',
        question: 'Gisteren kwam ik te laat ___ op het station.',
        options: ['aan', 'uit', 'op'],
        answer: 0,
        hint: 'Use the separable prefix from `aankomen`.',
        explanation: '`Te laat aan` is correct with `aankomen`.'
      },
      {
        id: 'a2-travel-order',
        type: 'order',
        prompt: 'Arrange the travel question.',
        question: 'Ask: Where do I have to change trains?',
        tokens: ['Waar', 'moet', 'ik', 'overstappen'],
        answer: ['Waar', 'moet', 'ik', 'overstappen'],
        hint: 'Question word first, modal second.',
        explanation: '`Waar moet ik overstappen?` is correct.'
      }
    ]
  },
  {
    id: 'a2-writing',
    module: 'Writing for the exam',
    grammar: 'Linking words, question prompts, formal openings and closings',
    vocabulary: ['beste', 'met vriendelijke groet', 'omdat', 'maar', 'daarom', 'alstublieft'],
    sentenceFrame:
      'Beste meneer, ik kan morgen niet komen omdat ik ziek ben. Met vriendelijke groet, Ana.',
    practiceSteps: [
      'Write one short note with a clear reason.',
      'Join two ideas with omdat, maar, daarom.',
      'Practice opening and closing lines until they are automatic.'
    ],
    sentenceGoal: 'Can write a short note, email, or form response with clear meaning.',
    examLink: 'Aligned to DUO A2 writing tasks, which include short messages, letters, and form completion.',
    exercises: [
      {
        id: 'a2-writing-choice',
        type: 'choice',
        prompt: 'Choose the best exam opening.',
        question: 'Which line is suitable for a short formal note?',
        options: ['Beste meneer,', 'Hoi vriend,', 'Yo,'],
        answer: 0,
        hint: 'Keep it polite and standard.',
        explanation: '`Beste meneer,` works for a formal A2 message.'
      },
      {
        id: 'a2-writing-fill',
        type: 'fillBlank',
        prompt: 'Complete the reason.',
        question: 'Ik kan morgen niet komen ___ ik ziek ben.',
        options: ['omdat', 'maar', 'daarom'],
        answer: 0,
        hint: 'Use the conjunction that introduces a reason.',
        explanation: '`Omdat` introduces the reason.'
      },
      {
        id: 'a2-writing-order',
        type: 'order',
        prompt: 'Put the closing line in order.',
        question: 'Write: With kind regards, Ana.',
        tokens: ['Met', 'groet,', 'vriendelijke', 'Ana'],
        answer: ['Met', 'vriendelijke', 'groet,', 'Ana'],
        hint: 'Memorise this as a fixed chunk.',
        explanation: '`Met vriendelijke groet, Ana` is the standard closing.'
      },
      {
        id: 'a2-writing-writing',
        type: 'writing',
        prompt: 'Write a short exam-style note.',
        question: 'Write one short message saying you cannot come tomorrow because you are sick.',
        minWords: 6,
        keywords: ['morgen', 'niet', 'komen'],
        hint: 'Use a simple reason sentence with `omdat` if possible.',
        explanation: 'A strong A2 answer communicates absence, time, and reason clearly.'
      }
    ]
  },
  {
    id: 'a2-municipality',
    module: 'Municipality and administration',
    grammar: 'Question prompts, polite requests, form language',
    vocabulary: ['gemeente', 'formulier', 'aanvraag', 'inschrijven', 'bewijs', 'document'],
    sentenceFrame:
      'Ik wil mij inschrijven bij de gemeente. Welk formulier heb ik nodig? Ik heb mijn document meegenomen.',
    practiceSteps: [
      'Ask for the correct form or document politely.',
      'Use fixed municipality phrases without translating word by word.',
      'Read short administrative notices and identify the required action.'
    ],
    sentenceGoal: 'Can handle simple municipality and registration situations in Dutch.',
    examLink: 'Relevant to practical reading, short speaking prompts, and form-based tasks.',
    exercises: [
      {
        id: 'a2-municipality-choice',
        type: 'choice',
        prompt: 'Choose the polite municipality question.',
        question: 'Which sentence is best at the municipality desk?',
        options: [
          'Welk formulier heb ik nodig?',
          'Ik nodig formulier welk?',
          'Formulier u geeft mij nu?'
        ],
        answer: 0,
        hint: 'Use a normal question form.',
        explanation: '`Welk formulier heb ik nodig?` is correct and polite enough.'
      },
      {
        id: 'a2-municipality-fill',
        type: 'fillBlank',
        prompt: 'Complete the sentence.',
        question: 'Ik wil mij ___ bij de gemeente.',
        options: ['inschrijven', 'ingeschreven', 'inschrijft'],
        answer: 0,
        hint: 'After `wil` use the infinitive.',
        explanation: '`Ik wil mij inschrijven` is correct.'
      },
      {
        id: 'a2-municipality-order',
        type: 'order',
        prompt: 'Arrange the sentence.',
        question: 'Say: I brought my document.',
        tokens: ['document', 'mijn', 'heb', 'meegenomen', 'Ik'],
        answer: ['Ik', 'heb', 'mijn', 'document', 'meegenomen'],
        hint: 'Perfect tense puts the participle at the end.',
        explanation: '`Ik heb mijn document meegenomen` is correct.'
      }
    ]
  },
  {
    id: 'a2-listening',
    module: 'Listening for key details',
    grammar: 'Question words, numbers, times, distractor handling',
    vocabulary: ['bericht', 'tijd', 'vertrek', 'nummer', 'afdeling', 'openingstijd'],
    sentenceFrame:
      'Luister eerst naar tijd, plaats en nummer. Kies daarna het antwoord dat echt past bij de vraag.',
    practiceSteps: [
      'Predict whether the answer should be a time, place, person, or number.',
      'Ignore extra detail that does not answer the question directly.',
      'Repeat key listening words like morgen, afdeling, nummer, half, kwart.'
    ],
    sentenceGoal: 'Can catch the key detail in short A2 audio even when there are distractors.',
    examLink: 'Direct preparation for short listening items in Dutch integration practice.',
    exercises: [
      {
        id: 'a2-listening-choice',
        type: 'choice',
        prompt: 'Choose the best strategy.',
        question: 'What should you listen for first in a short practical audio?',
        options: ['Every single word', 'The key detail the question asks for', 'Only new vocabulary'],
        answer: 1,
        hint: 'Exams reward focused listening.',
        explanation: 'Listening for the exact answer type is the best A2 strategy.'
      },
      {
        id: 'a2-listening-fill',
        type: 'fillBlank',
        prompt: 'Complete the exam tip.',
        question: 'Luister eerst naar tijd, plaats en ___.',
        options: ['nummer', 'maar', 'moeilijk'],
        answer: 0,
        hint: 'Think of common practical details.',
        explanation: '`Nummer` fits the exam-tip phrase.'
      },
      {
        id: 'a2-listening-order',
        type: 'order',
        prompt: 'Arrange the strategy sentence.',
        question: 'Say: First read the question.',
        tokens: ['Lees', 'eerst', 'de', 'vraag'],
        answer: ['Lees', 'eerst', 'de', 'vraag'],
        hint: 'This is an imperative sentence.',
        explanation: '`Lees eerst de vraag` is the correct strategy sentence.'
      }
    ]
  },
  {
    id: 'a2-reading',
    module: 'Reading notices and practical texts',
    grammar: 'Scanning, reference words, functional vocabulary',
    vocabulary: ['gesloten', 'verplicht', 'verboden', 'alleen', 'behalve', 'ingang'],
    sentenceFrame:
      'Lees eerst het doel van de tekst. Zoek daarna woorden als gesloten, verplicht, alleen, en ingang.',
    practiceSteps: [
      'Scan the text before reading every line closely.',
      'Practice common notice words that change the meaning of the whole text.',
      'Choose the answer that matches the text function, not just one familiar word.'
    ],
    sentenceGoal: 'Can understand common notices, instructions, and short practical messages.',
    examLink: 'Useful for A2 reading questions based on signs, messages, and service notices.',
    exercises: [
      {
        id: 'a2-reading-choice',
        type: 'choice',
        prompt: 'Choose the meaning.',
        question: 'What does `gesloten` mean on a sign?',
        options: ['Open', 'Closed', 'Cheap'],
        answer: 1,
        hint: 'This is a high-frequency notice word.',
        explanation: '`Gesloten` means `closed`.'
      },
      {
        id: 'a2-reading-fill',
        type: 'fillBlank',
        prompt: 'Complete the strategy line.',
        question: 'Zoek daarna woorden als gesloten, verplicht, alleen, en ___.',
        options: ['ingang', 'komen', 'leren'],
        answer: 0,
        hint: 'It should be another notice word.',
        explanation: '`Ingang` fits the practical-reading set.'
      },
      {
        id: 'a2-reading-order',
        type: 'order',
        prompt: 'Arrange the reading tip.',
        question: 'Say: First scan the text.',
        tokens: ['Scan', 'eerst', 'de', 'tekst'],
        answer: ['Scan', 'eerst', 'de', 'tekst'],
        hint: 'Imperative first.',
        explanation: '`Scan eerst de tekst` is correct.'
      }
    ]
  },
  {
    id: 'a2-opinions',
    module: 'Opinions and comparisons',
    grammar: 'want, omdat, maar, comparative forms, simple opinions',
    vocabulary: ['denken', 'vinden', 'belangrijk', 'beter', 'minder', 'meer'],
    sentenceFrame:
      'Ik vind dit belangrijk omdat het handig is. De trein is sneller maar de bus is goedkoper.',
    practiceSteps: [
      'Give one simple opinion and one short reason.',
      'Compare two options using beter, sneller, goedkoper, of duurder.',
      'Use maar and omdat to connect ideas clearly.'
    ],
    sentenceGoal: 'Can express a simple opinion and compare everyday options.',
    examLink: 'Useful for A2 speaking and writing tasks that ask for a preference or short explanation.',
    exercises: [
      {
        id: 'a2-opinions-choice',
        type: 'choice',
        prompt: 'Choose the opinion sentence.',
        question: 'Which sentence gives an opinion with a reason?',
        options: [
          'Ik vind dit belangrijk omdat het handig is.',
          'Ik belangrijk omdat handig vind.',
          'Belangrijk ik vind omdat dit.'
        ],
        answer: 0,
        hint: 'Use a normal subject-verb sentence before adding the reason.',
        explanation: '`Ik vind dit belangrijk omdat het handig is` is correct.'
      },
      {
        id: 'a2-opinions-fill',
        type: 'fillBlank',
        prompt: 'Complete the comparison.',
        question: 'De trein is ___ dan de bus.',
        options: ['sneller', 'snel', 'snelst'],
        answer: 0,
        hint: 'A comparison with `dan` needs the comparative form.',
        explanation: '`Sneller dan` is correct.'
      },
      {
        id: 'a2-opinions-writing',
        type: 'writing',
        prompt: 'Write a short opinion.',
        question: 'Write one short Dutch line saying which transport option you prefer and why.',
        minWords: 6,
        keywords: ['ik', 'vind'],
        hint: 'Use `ik vind` plus one simple reason.',
        explanation: 'A good A2 answer expresses a preference and gives a short reason.'
      }
    ]
  },
  {
    id: 'a2-phone',
    module: 'Phone calls and short service messages',
    grammar: 'Formal openings, confirmation, message taking',
    vocabulary: ['met', 'spreken', 'bericht', 'terugbellen', 'moment', 'verbinden'],
    sentenceFrame:
      'Met Ana. Kan ik meneer Jansen spreken? Wilt u later terugbellen? Ik laat een bericht achter.',
    practiceSteps: [
      'Open a phone call clearly and ask for the right person.',
      'Leave a short message with a request to call back.',
      'Practice standard service-desk call phrases aloud.'
    ],
    sentenceGoal: 'Can manage a simple phone call and leave or understand a short message.',
    examLink: 'Supports A2 speaking and listening tasks involving service calls and short practical communication.',
    exercises: [
      {
        id: 'a2-phone-choice',
        type: 'choice',
        prompt: 'Choose the correct phone opening.',
        question: 'Which line is suitable at the start of a phone call?',
        options: ['Met Ana. Kan ik meneer Jansen spreken?', 'Ik telefoon spreken nu?', 'Hallo Ana spreken meneer?'],
        answer: 0,
        hint: 'Use a fixed phone phrase.',
        explanation: '`Met Ana. Kan ik meneer Jansen spreken?` is a suitable call opening.'
      },
      {
        id: 'a2-phone-fill',
        type: 'fillBlank',
        prompt: 'Complete the message.',
        question: 'Wilt u later ___?',
        options: ['terugbellen', 'spreken', 'bericht'],
        answer: 0,
        hint: 'Think of the phrase `call back`.',
        explanation: '`Wilt u later terugbellen?` is correct.'
      },
      {
        id: 'a2-phone-order',
        type: 'order',
        prompt: 'Arrange the sentence.',
        question: 'Say: I leave a message.',
        tokens: ['laat', 'een', 'ik', 'achter', 'bericht'],
        answer: ['Ik', 'laat', 'een', 'bericht', 'achter'],
        hint: 'The separable prefix goes to the end.',
        explanation: '`Ik laat een bericht achter` is correct.'
      }
    ]
  },
  {
    id: 'a2-services',
    module: 'Instructions and daily services',
    grammar: 'Imperatives, sequence words, practical instructions',
    vocabulary: ['eerst', 'daarna', 'wachten', 'meenemen', 'tekenen', 'volgen'],
    sentenceFrame:
      'Lees eerst de instructie. Daarna moet u wachten. Neem uw document mee en volg de borden.',
    practiceSteps: [
      'Follow a short sequence of practical instructions.',
      'Use first and then language: eerst, daarna.',
      'Recognise common service verbs like meenemen, wachten, volgen, tekenen.'
    ],
    sentenceGoal: 'Can understand and give simple instructions in service or office situations.',
    examLink: 'Relevant to A2 reading, listening, and practical service communication tasks.',
    exercises: [
      {
        id: 'a2-services-choice',
        type: 'choice',
        prompt: 'Choose the instruction sequence.',
        question: 'Which sentence is correct?',
        options: [
          'Lees eerst de instructie. Daarna moet u wachten.',
          'Daarna leest u eerst wachten.',
          'U wachten eerst daarna instructie.'
        ],
        answer: 0,
        hint: 'Keep the sequence words clear.',
        explanation: '`Lees eerst de instructie. Daarna moet u wachten` is correct.'
      },
      {
        id: 'a2-services-fill',
        type: 'fillBlank',
        prompt: 'Complete the practical instruction.',
        question: 'Neem uw document ___.',
        options: ['mee', 'wachten', 'daarna'],
        answer: 0,
        hint: 'Use the separable phrase `meenemen`.',
        explanation: '`Neem uw document mee` is correct.'
      },
      {
        id: 'a2-services-match',
        type: 'matching',
        prompt: 'Match the instruction verbs.',
        question: 'Connect each Dutch verb to its meaning.',
        pairs: [
          ['wachten', 'wait'],
          ['tekenen', 'sign'],
          ['volgen', 'follow']
        ],
        hint: 'These are common service and office instruction verbs.',
        explanation: 'These verbs appear often in practical A2 texts and directions.'
      }
    ]
  }
];

export const syllabusChecklist = {
  A1: [
    {
      id: 'a1-speaking-intro',
      area: 'Speaking',
      objective: 'Introduce yourself and give basic personal information.',
      unitIds: ['a1-day-1', 'a1-day-10']
    },
    {
      id: 'a1-home-family',
      area: 'Topics',
      objective: 'Talk about family, home, and familiar surroundings.',
      unitIds: ['a1-day-2']
    },
    {
      id: 'a1-routine',
      area: 'Topics',
      objective: 'Describe daily routine, work, school, and simple schedules.',
      unitIds: ['a1-day-3', 'a1-day-9']
    },
    {
      id: 'a1-shopping',
      area: 'Interaction',
      objective: 'Ask for prices, quantities, and simple information in shops.',
      unitIds: ['a1-day-4']
    },
    {
      id: 'a1-time-forms',
      area: 'Reading/Writing',
      objective: 'Understand and fill basic dates, times, and personal forms.',
      unitIds: ['a1-day-5', 'a1-day-10']
    },
    {
      id: 'a1-negation',
      area: 'Grammar',
      objective: 'Use basic negation and simple sentence correction.',
      unitIds: ['a1-day-6']
    },
    {
      id: 'a1-transport',
      area: 'Listening/Interaction',
      objective: 'Ask for and understand simple directions and transport information.',
      unitIds: ['a1-day-7']
    },
    {
      id: 'a1-health',
      area: 'Interaction',
      objective: 'Describe basic health problems and ask for help.',
      unitIds: ['a1-day-8']
    },
    {
      id: 'a1-social',
      area: 'Interaction',
      objective: 'Invite someone, accept, or refuse politely.',
      unitIds: ['a1-day-11']
    },
    {
      id: 'a1-preferences',
      area: 'Speaking',
      objective: 'Express simple likes, hobbies, and weather descriptions.',
      unitIds: ['a1-day-12']
    }
  ],
  A2: [
    {
      id: 'a2-appointments',
      area: 'Interaction',
      objective: 'Manage appointments, requests, and short practical conversations.',
      unitIds: ['a2-work', 'a2-phone']
    },
    {
      id: 'a2-past-events',
      area: 'Grammar/Speaking',
      objective: 'Describe past events and personal experiences clearly.',
      unitIds: ['a2-past']
    },
    {
      id: 'a2-health-housing',
      area: 'Topics',
      objective: 'Handle health, housing, and neighbourhood situations.',
      unitIds: ['a2-health', 'a2-housing']
    },
    {
      id: 'a2-travel-services',
      area: 'Listening/Interaction',
      objective: 'Understand travel, daily services, and practical instructions.',
      unitIds: ['a2-travel', 'a2-services']
    },
    {
      id: 'a2-writing',
      area: 'Writing',
      objective: 'Write short notes, messages, and formal practical responses.',
      unitIds: ['a2-writing']
    },
    {
      id: 'a2-admin',
      area: 'Reading/Interaction',
      objective: 'Handle municipality and document-related communication.',
      unitIds: ['a2-municipality']
    },
    {
      id: 'a2-reading',
      area: 'Reading',
      objective: 'Understand notices, practical texts, and key written instructions.',
      unitIds: ['a2-reading']
    },
    {
      id: 'a2-listening',
      area: 'Listening',
      objective: 'Catch key details in short practical audio with distractors.',
      unitIds: ['a2-listening']
    },
    {
      id: 'a2-opinions',
      area: 'Speaking/Writing',
      objective: 'Give simple opinions, reasons, and comparisons.',
      unitIds: ['a2-opinions']
    }
  ]
};

export const assessments = [
  {
    id: 'assessment-a1-checkpoint',
    level: 'A1',
    title: 'A1 checkpoint test',
    description: 'A short mixed check across introductions, home, routine, shopping, forms, and negation.',
    passScore: 4,
    items: [
      {
        id: 'a1-assess-1',
        type: 'choice',
        prompt: 'A1 checkpoint',
        question: 'Which sentence is correct?',
        options: ['Ik ben uit India kom.', 'Ik kom uit India.', 'Uit India ik kom.'],
        answer: 1,
        hint: 'Keep subject-verb order simple.',
        explanation: '`Ik kom uit India` is correct.'
      },
      {
        id: 'a1-assess-2',
        type: 'fillBlank',
        prompt: 'A1 checkpoint',
        question: 'Ik heb ___ auto.',
        options: ['geen', 'niet', 'nee'],
        answer: 0,
        hint: 'Use the noun negation form.',
        explanation: '`Ik heb geen auto` is correct.'
      },
      {
        id: 'a1-assess-3',
        type: 'order',
        prompt: 'A1 checkpoint',
        question: 'Say: Tomorrow I have an appointment.',
        tokens: ['morgen', 'heb', 'ik', 'een', 'afspraak'],
        answer: ['Morgen', 'heb', 'ik', 'een', 'afspraak'],
        hint: 'Verb second after the time word.',
        explanation: '`Morgen heb ik een afspraak` is correct.'
      },
      {
        id: 'a1-assess-4',
        type: 'choice',
        prompt: 'A1 checkpoint',
        question: 'What matches `postcode`?',
        options: ['1012 AB', 'Ana', 'Spaans'],
        answer: 0,
        hint: 'Think of form language.',
        explanation: 'A postcode is a postal code like `1012 AB`.'
      },
      {
        id: 'a1-assess-5',
        type: 'fillBlank',
        prompt: 'A1 checkpoint',
        question: 'Waar is de ___?',
        options: ['winkel', 'leert', 'goedkoop'],
        answer: 0,
        hint: 'You need a noun.',
        explanation: '`Waar is de winkel?` is correct.'
      },
      {
        id: 'a1-assess-6',
        type: 'matching',
        prompt: 'A1 checkpoint',
        question: 'Match the personal data words.',
        pairs: [
          ['adres', 'address'],
          ['postcode', 'postal code'],
          ['telefoonnummer', 'phone number']
        ],
        hint: 'These are common form words.',
        explanation: 'Personal data vocabulary is essential for A1 forms.'
      }
    ]
  },
  {
    id: 'assessment-a2-checkpoint',
    level: 'A2',
    title: 'A2 checkpoint test',
    description: 'A mixed A2 test across appointments, past tense, housing, administration, and writing.',
    passScore: 4,
    items: [
      {
        id: 'a2-assess-1',
        type: 'choice',
        prompt: 'A2 checkpoint',
        question: 'Which sentence is best for changing an appointment?',
        options: ['Kunt u de afspraak verzetten?', 'U afspraak verzetten?', 'Verzetten nu afspraak?'],
        answer: 0,
        hint: 'Use a polite modal form.',
        explanation: '`Kunt u de afspraak verzetten?` is correct.'
      },
      {
        id: 'a2-assess-2',
        type: 'fillBlank',
        prompt: 'A2 checkpoint',
        question: 'Ik heb gisteren ___.',
        options: ['gewerkt', 'werken', 'werk'],
        answer: 0,
        hint: 'Perfect tense needs a participle.',
        explanation: '`Ik heb gisteren gewerkt` is correct.'
      },
      {
        id: 'a2-assess-3',
        type: 'order',
        prompt: 'A2 checkpoint',
        question: 'Say: We clean up the house.',
        tokens: ['ruimen', 'het', 'wij', 'op', 'huis'],
        answer: ['Wij', 'ruimen', 'het', 'huis', 'op'],
        hint: 'The separable prefix moves to the end.',
        explanation: '`Wij ruimen het huis op` is correct.'
      },
      {
        id: 'a2-assess-4',
        type: 'choice',
        prompt: 'A2 checkpoint',
        question: 'Which line is a suitable formal opening?',
        options: ['Beste meneer,', 'Hoi maat,', 'Hey!'],
        answer: 0,
        hint: 'Keep it formal.',
        explanation: '`Beste meneer,` is suitable for a formal note.'
      },
      {
        id: 'a2-assess-5',
        type: 'fillBlank',
        prompt: 'A2 checkpoint',
        question: 'Ik wil mij ___ bij de gemeente.',
        options: ['inschrijven', 'inschrijft', 'ingeschreven'],
        answer: 0,
        hint: 'After `wil` use the infinitive.',
        explanation: '`Ik wil mij inschrijven` is correct.'
      },
      {
        id: 'a2-assess-6',
        type: 'writing',
        prompt: 'A2 checkpoint',
        question: 'Write one short formal line saying you cannot come to the appointment tomorrow.',
        minWords: 6,
        keywords: ['morgen', 'afspraak', 'niet'],
        hint: 'Keep it short and practical.',
        explanation: 'A passing A2 response includes time, appointment context, and negation.'
      }
    ]
  }
];

export const inburgeringAlignment = {
  summary:
    'A1 is used here as the foundation layer. A2 is the first full exam-aligned stage for Dutch inburgering-style language practice.',
  note:
    'Official DUO sources currently describe language exams at A2, B1, and B2. This app uses A1 to build daily control before the A2 exam track.',
  skills: [
    'Speaking on a computer with short prompts and responses',
    'Listening to short clips and choosing key information',
    'Reading simple notices, forms, and practical texts',
    'Writing short messages, letters, and form answers by hand or from prompts'
  ]
};

export const grammarDrills = [
  {
    prompt: 'Choose the correct sentence',
    question: 'Which sentence uses Dutch word order correctly?',
    options: [
      'Ik morgen ga naar school.',
      'Ik ga morgen naar school.',
      'Morgen ik ga naar school.'
    ],
    answer: 1,
    explain: 'In a basic main clause, the conjugated verb usually stays in second position.'
  },
  {
    prompt: 'Negation trap',
    question: 'Complete the sentence: Ik heb ___ auto.',
    options: ['niet', 'geen', 'nee'],
    answer: 1,
    explain: '`Geen` negates indefinite nouns. `Niet` is used differently.'
  },
  {
    prompt: 'Article memory',
    question: 'Which option is correct?',
    options: ['de huis', 'het huis', 'een station de'],
    answer: 1,
    explain: '`Huis` is a `het` word. Strong A1 progress depends on article repetition.'
  }
];

export const examTips = [
  {
    title: 'Listen for function, not every word',
    body: 'In beginner Dutch audio, you can still answer correctly if you catch place, time, price, and action.'
  },
  {
    title: 'Scan forms before reading fully',
    body: 'When a task asks for a date, number, or name, predict the answer type first. This saves time.'
  },
  {
    title: 'Build a 20-minute daily loop',
    body: '5 minutes review, 10 minutes active drill, 5 minutes speaking aloud. Consistency beats long sessions.'
  }
];

export const weeklyPlan = [
  {
    day: 'Monday',
    task: 'Pronunciation + greetings',
    result: 'Speak the alphabet, greetings, and introductions aloud three times.'
  },
  {
    day: 'Tuesday',
    task: 'Verb patterns',
    result: 'Drill zijn, hebben, wonen, spreken in short sentences.'
  },
  {
    day: 'Wednesday',
    task: 'Articles + vocabulary',
    result: 'Review 25 nouns with de/het and recall them without prompts.'
  },
  {
    day: 'Thursday',
    task: 'Questions + listening',
    result: 'Practice where/what/how questions and one short listening simulation.'
  },
  {
    day: 'Friday',
    task: 'Mini exam',
    result: 'Finish a timed quiz and review every mistake immediately.'
  }
];
