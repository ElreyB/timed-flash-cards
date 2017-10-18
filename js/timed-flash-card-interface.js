import { FlashCard } from "./../js/timed-flash-card.js";

$(document).ready(function() {
  let player = new FlashCard();

  let flashCards = FlashCard.cards();
  flashCards.forEach(function(card, index) {
    let cardForm = FlashCard.createForm(card, index);
    $(".display-cards").append(cardForm);
  });

  $(".name-form").submit(function(e) {
    e.preventDefault();
    const userName = $("input.name").val();
    player.setName(userName);
    $("span.player").text(player.name);
    $("div.name-container").addClass("hide");
    $("div.start").removeClass("hide");
  });
  
  let counter;
  $("button.start").click(() => {
     counter = setInterval(() => {
         $("div.timer").text(player.timer);
         if (player.timer === 0){
           clearInterval(counter);
           $("span.times-up").removeClass("hide");
         }
         player.timer--;
      }, 1000);
  });

  $(".button").click(function() {
    let answer = $(this).attr("value");
    let index = $(this).attr("index");
    if (answer === FlashCard.cards()[index].answer) {
      $(this).addClass("btn-success");
      player.addPoint();
    } else {
      $(this).addClass("btn-danger");
      $(".btn-answer").addClass("btn-success");
    }
    clearInterval(counter);
    if (player.points > 0) {
      $(".points").text(player.points);
    }
  });


  $("button.next").click(() => {
    player.timer = 10;
    $(".button").removeClass("btn-danger");
    $(".btn-answer").removeClass("btn-success");
      counter = setInterval(() => {
      $("div.timer").text(player.timer);
      if (player.timer === 0){
        clearInterval(counter);
        $("span.times-up").removeClass("hide");
      }
      player.timer--;
    }, 1000);
  });
});
