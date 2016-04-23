// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  function restaurantButtonCheck(){
    $('.restaurant-submit-button').attr('disabled','disabled');
    var text = $(".required-restaurant-name").val();
    //initial check for field
    if(text!=""){
      $('.restaurant-submit-button').removeAttr('disabled');
    }
    //check after field is edited
    $('.required-restaurant-name').keyup(function(){
      text = $(".required-restaurant-name").val();
      if(text!=""){
        $('.restaurant-submit-button').removeAttr('disabled');
      }else{
        $('.restaurant-submit-button').attr('disabled','disabled');
      }
    });
  }

  restaurantButtonCheck();
});
