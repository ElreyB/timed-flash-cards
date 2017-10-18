export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const flashCards = [
  {
    question: "When do you use === ?",
    answer: "to compare if values are equal",
    wrongAnswers: shuffleArray(["to define a variable", "wrong2", "wrong3", "wrong4", "wrong5"])
  },
  {
    question: "When do you use = ?",
    answer: "to define a variable",
    wrongAnswers: shuffleArray(["wrong1", "wrong2", "wrong3", "wrong4", "wrong5"])
  },
  {
    question: "When do you use an ID in a HTML file?",
    answer: "when you want to assign an unique selector to element",
    wrongAnswers: shuffleArray(["wrong1", "wrong2", "wrong3", "wrong4", "wrong5"])
  }
];
