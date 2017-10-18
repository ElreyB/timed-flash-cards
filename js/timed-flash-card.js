// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

import { shuffleArray, flashCards} from './flash-cards.js';

export class FlashCard {
  constructor(options = {}) {
    this.name = options.name;
    this.points = 0;
    this.timer = 10;
  }

  static cards() {
    return flashCards;
  }

  setName(name){
    this.name = name;
  }

  addPoint() {
    this.points++;
  }

  static createForm(card, index) {
    let forms;
    const answers = [
      `<div class="col-md-6">
        <button type="button" name="answer" index="${index}" value="${card.answer}" class="btn button btn-answer">
          <span class="answer">${card.answer}</span>
        </button>
        </div>`,
      `<div class="col-md-6">
        <button type="button" name="wrong1" index="${index}" value="${card
        .wrongAnswers[0]}" class="btn button">
          <span class="wrong1">${card.wrongAnswers[0]}</span>
        </button>
      </div>`,
      `<div class="col-md-6">
        <button type="button" name="wrong2" index="${index}" value="${card
        .wrongAnswers[1]}" class="btn button">
          <span class="wrong2">${card.wrongAnswers[1]}</span>
        </button>
      </div>`,
      `<div class="col-md-6">
        <button type="button" name="wrong2" index="${index}" value="${card
        .wrongAnswers[2]}" class="btn button">
          <span class="wrong2">${card.wrongAnswers[2]}</span>
        </button>
      </div>`
    ];

    forms = `<form class="flash-cards card-${index} hide">
        <div class="panel">
          <div class="panel-heading panel-color">
            <label for="question" id="question1">${card.question}</label>
            <div class="timer"> </div> <span class="times-up hide">Times UP ⏰</span>
          </div>
          <div class="panel-body">
            <div class="row">
            ${shuffleArray(answers).join("\n")}
            </div>
          </div>
          <div class="panel-footer">
            <button type="button" name="button" class= "btn next">Next</button>
            <div class="points"></div>
          </div>
        </div>
      </form><br>`;

    return forms;
  }

  //ending
}
