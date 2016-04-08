$(document).ready(function(){
  $(".hamburger").click(function(){
    if ($(".hamburger").hasClass("hamburger-is-active")){
      $("nav").removeClass('show');
      $(".hamburger").removeClass("hamburger-is-active");
    }
    else{
      $("nav").addClass('show');
      $(".hamburger").addClass("hamburger-is-active");
    }
  });
});