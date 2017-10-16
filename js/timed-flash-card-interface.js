import { FlashCard } from './../js/timed-flash-card.js';

$(document).ready(function(){
  $("input[name='answer']").prop('value', FlashCard.cards()[FlashCard.questionKeys()[0]]);
  $("label#question1").text(FlashCard.questionKeys()[0]);
  $("span.answer").text(FlashCard.cards()[FlashCard.questionKeys()[0]]);
});
