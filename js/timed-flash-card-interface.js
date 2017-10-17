import { FlashCard } from "./../js/timed-flash-card.js";

$(document).ready(function() {
  let flashCards = FlashCard.cards();
  flashCards.forEach(function(card, index) {
    let cardForm = FlashCard.createForm(card, index);
    $(".well").append(cardForm);
  });

  $(".name-form").submit(function(e) {
    e.preventDefault();
    const userName = $("input.name").val();
    player = new FlashCard({ name: userName });
    player.addPoint();
    if (player.points > 0) {
      $(".result").text(player.points);
    }
  });

  $(".btn").click(function() {
    let answer = $(this).attr("value");
    let index = $(this).attr("index");
    if (answer === FlashCard.cards()[index].answer) {
      $(".result").text("Your answer is correct");
    } else {
      $(".result").text("Your answer is incorrect");
    }
  });
});
