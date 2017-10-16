import { FlashCard } from './../js/timed-flash-card.js';

describe('FlashCard', function(){
  let flash;

  beforeEach(function(){
    flash = new FlashCard({name: "Bob"})
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it("should have a name", function(){
    expect(flash.name).toEqual("Bob")
  });

  it("should start with 0 points", function(){
    expect(flash.points).toEqual(0)
  });

  it("should be a Object", function(){
    expect(FlashCard.cards() instanceof Object).toEqual(true)
  });

  it("should be a Object", function(){
    expect(FlashCard.questionKeys() instanceof Array).toEqual(true)
  });

  it("should return the length of Object", function(){
    expect(FlashCard.questionKeys().length).toEqual(3)
  });

  it("should return question", function(){
    expect(FlashCard.cards()[FlashCard.questionKeys()[0]]).toEqual("to compare if values are equal")
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

  it("should return wrong answer of first index", function(){
    expect(FlashCard.wrongAnswers()[FlashCard.questionKeys()[0]][0]).toEqual("wrong1")
  });

});
