import { FlashCard } from './../js/timed-flash-card.js';

describe('FlashCard', function(){
  let flash;

  beforeEach(function(){
    flash = new FlashCard()
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it("should have a name", function(){
    flash.setName("Bob")
    expect(flash.name).toEqual("Bob")
  });

  it("should start with 0 points", function(){
    expect(flash.points).toEqual(0)
  });

  it("should be a Object", function(){
    expect(FlashCard.cards() instanceof Array).toEqual(true)
  });

  it("should return question", function(){
    expect(FlashCard.cards()[0].question).toEqual("When do you use === ?")
  });

  it("should return answer", function(){
    expect(FlashCard.cards()[0].answer).toEqual("to compare if values are equal")
  });

  it("should return wrong answer of first index", function(){
    expect(FlashCard.cards()[0].wrongAnswers[0]).toEqual("wrong1")
  });

  it("should increase points by one", function(){
    flash.addPoint()
    expect(flash.points).toEqual(1)
  });

  it("should have timer of 7 after 3000 mileseconds", function(){
    flash.setTimer();
    jasmine.clock().tick(3000);
    expect(flash.timer).toEqual(7);
  });


});
