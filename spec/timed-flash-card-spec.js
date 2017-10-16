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
    expect(flash.cards instanceof Object).toEqual(true)
  });
});
