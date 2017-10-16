import { FlashCard } from './../js/timed-flash-card.js';

$(document).ready(function(){
  $("button[name='answer']").prop('value', FlashCard.cards()[FlashCard.questionKeys()[0]]);
    $("button[name='wrong1']").prop('value', FlashCard.wrongAnswers()[FlashCard.questionKeys()[0]][0]);
      $("button[name='wrong2']").prop('value', FlashCard.wrongAnswers()[FlashCard.questionKeys()[0]][3]);
  $("label#question1").text(FlashCard.questionKeys()[0]);
    $("span.wrong1").text(FlashCard.wrongAnswers()[FlashCard.questionKeys()[0]][0]);
    $("span.wrong2").text(FlashCard.wrongAnswers()[FlashCard.questionKeys()[0]][3]);
  $("span.answer").text(FlashCard.cards()[FlashCard.questionKeys()[0]]);

  $(".btn").click(function(){
    let answer = $(this).attr("value");
    if (answer === FlashCard.cards()[FlashCard.questionKeys()[0]]) {
      $(".result").text("Your answer is correct")
    } else {
      $(".result").text("Your answer is incorrect")
    }




  });



});
