// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  function scheduleInfoButton(){
    var button = ".schedule-info-button";
    var preClickHTML = '<i class="fa fa-info"></i>';
    var postClickHTML = "If closed, leave the time for that day blank";
    $(button).click(function(){
      currentHTML = $(button).html();
      currentHTML = currentHTML == preClickHTML ? postClickHTML : preClickHTML;
      $(button).html("");
      $(button).toggleClass("schedule-info-button-expand");
      $(button).delay(100).queue(function(n){
        $(this).html(currentHTML); n();
      });
    });
  }

scheduleInfoButton();

});