export class FlashCard {
  constructor(options){
    this.name = options.name;
    this.points = 0;
    this.timer = 10
  }

  static cards(){
    let flashCards = new Object({
      "When do you use === ?": "to compare if values are equal",
      "When do you use = ?": "to define a variable",
      "When do you use an ID in a HTML file?": "when you want to assign an unique selector to element"
    });

    return flashCards;
  }

  static questionKeys(){
    let questions = Object.keys(FlashCard.cards());
    return questions;
  }

  addPoint(){
    this.points += 1;
  }

  setTimer(){
    setInterval(() => {
      this.timer--;
    }, 1000);
  }

}
