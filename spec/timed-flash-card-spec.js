import { FlashCard } from './../js/timed-flash-card.js';

describe('FlashCard', function(){
  let flash;

  beforeEach(function(){
    flash = new FlashCard({name: "Bob"})
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
    console.log(Object.keys(FlashCard.cards()))
    expect(FlashCard.questionKeys().length).toEqual(3)
  });

  it("should return question", function(){

    expect(FlashCard.cards()[FlashCard.questionKeys()[0]]).toEqual("to compare if values are equal")
  });
});
