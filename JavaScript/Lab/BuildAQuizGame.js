const questions = [
  {
    category: "Math",
    question: "What is the square root of 625?",
    choices: [
      "25",
      "35",
      "45"
    ],
    answer: "25"
  },
  {
    category: "Geography",
    question: "What city was once called Constantinople?",
    choices: [
      "New York",
      "Istanbul",
      "Paris"
    ],
    answer: "Istanbul"
  },
  {
    category: "Religion",
    question: "In greek mythology, what creature resembles a winged horse?",
    choices: [
      "Centaur",
      "Pegasus",
      "Sphynx"
    ],
    answer: "Pegasus"
  },
  {
    category: "Video Games",
    question: "Who is the protagonist of the Metroid franchise?",
    choices: [
      "Metroid",
      "Samus",
      "Pikachu"
    ],
    answer: "Samus"
  },
  {
    category: "Music",
    question: "What was Weird Al Yankovic's parody of Coolio's \"Gangster's Paradise\" called?",
    choices: [
      "Amish Paradise",
      "Bankster's aking price",
      "Gambler's Pair o' dice"
    ],
    answer: "Amish Paradise"
  }
];

function getRandomQuestion(questions) {
  const questionCount = questions.length;
  const random = Math.floor(Math.random() * questionCount - 1) + 1;

  return questions[random];
}

function getRandomComputerChoice(choices) {
  const choiceCount = choices.length;
  const random = Math.floor(Math.random() * choiceCount - 1) + 1;

  return choices[random];
}

function getResults(question, choice) {
  if(question.answer == choice) {
    return "The computer's choice is correct!";
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}