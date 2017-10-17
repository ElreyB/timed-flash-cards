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


  $("button.start").click(function(){
   let counter = setInterval(function() {
        $("div.timer").text(player.timer);
        if (player.timer === 0){
          clearInterval(counter);
          $("span.times-up").removeClass("hide");
        }else{
          $(".button").click(function() {
            let answer = $(this).attr("value");
            let index = $(this).attr("index");
            if (answer === FlashCard.cards()[index].answer) {
              player.addPoint();
              $(this).addClass("btn-success");
              clearInterval(counter);
            } else {
              $(this).addClass("btn-danger");
              clearInterval(counter);
            }

            if (player.points > 0) {
              $(".points").text(player.points);
            }
          });
        }
        player.timer--;
    }, 1000);
  });

  $("button.next").click(function(){
    player.timer = 10;
   let counter = setInterval(function() {
        $("div.timer").text(player.timer);
        if (player.timer === 0){
          clearInterval(counter);
          $("span.times-up").removeClass("hide");
        }else{
          $(".button").click(function() {
            let answer = $(this).attr("value");
            let index = $(this).attr("index");
            if (answer === FlashCard.cards()[index].answer) {
              player.addPoint();
              $(this).addClass("btn-success");
              clearInterval(counter);
            } else {
              $(this).addClass("btn-danger");
              clearInterval(counter);
            }

            if (player.points > 0) {
              $(".points").text(player.points);
            }
          });
        }
        player.timer--;
    }, 1000);
  });


});
