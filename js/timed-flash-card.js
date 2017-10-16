export class FlashCard {
  constructor(options){
    this.name = options.name;
    this.points = 0;
    this.timer = 10;
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

  static wrongAnswers(){
    let wrongCards = new Object({
      "When do you use === ?": ["wrong1", "wrong2", "wrong3", "wrong4", "wrong5"],
      "When do you use = ?": ["wrong1", "wrong2", "wrong3", "wrong4", "wrong5"],
      "When do you use an ID in a HTML file?": ["wrong1", "wrong2", "wrong3", "wrong4", "wrong5"]
    });

    return wrongCards;
  }


  addPoint(){
    this.points += 1;
  }

  setTimer(){
    setInterval(() => {
      this.timer--;
    }, 1000);
  }

  static createForm(){
    let forms;
    forms = `<form class="flash-cards">
        <div class="panel panel-default">
          <div class="panel-heading">
            <label for="question" id="question1"></label>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-4">
                <button type="button" name="answer" value="" class="btn">
                <span class="answer"></span>
              </button>
              </div>
              <div class="col-md-4">
                <button type="button" name="wrong1" value="" class="btn">
                <span class="wrong1"></span>
              </button>
              </div>
              <div class="col-md-4">
                <button type="button" name="wrong2" value="" class="btn">
                <span class="wrong2"></span>
              </button>
              </div>
            </div>
          </div>
          <div class="panel-footer">
            <button type="submit" name="button" class= "btn">Submit</button>
            <div class="points"></div>
          </div>
        </div>
          <div class="form-group">
          </div>
      </form><br>`;

    return forms;
  }

//ending
}


// function RadionButtonSelectedValueSet() {
//   $("input[name='answer']").prop('value', "hello");
// }
