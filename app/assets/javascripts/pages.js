
  /******** Registration/Login Modal ********/
  $(function() {
    $("#modal-1, #modal2").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });

  $(function(){
    $('#login-modal #shared-login-link').remove();
    $('#signup-modal #shared-signup-link').remove();
  });
  /********* Flash Messages****/
  $(document).ready(function(){
    $(function(){
      setTimeout(function(){
        $('#flash-messages, .alert').slideUp();
      }, 4000);
    })
  });
/************* Parallax ******/
$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
/******** Homepage **********/
function showPic(source){
  var imageToSwap = document.getElementsByClassName("menu-interaction-graphic-container")[0].getElementsByTagName('IMG')[0];
  imageToSwap.src = source;
  imageToSwap.style.maxHeight = "500px";
  console.log(imageToSwap);
}

function stepSelect(stepNumber, clickedObject){
  var step = clickedObject.getElementsByClassName("step")[0];
  var steps = document.getElementsByClassName("step");
  var stepClear;

  //Reset all button backgrounds
  for(let i = 0; i<steps.length; i++){
    var stepClear = steps[i];
    stepClear.style.backgroundColor = "transparent";
  }

  //Set Active to Red
  step.style.backgroundColor = "#DE1B1B";

  //Change Picture
  if (stepNumber == 1){
    showPic('/assets/form.png');
  }else if(stepNumber == 2){
    showPic('/assets/camerafood.jpg');
  }else{
    showPic('/assets/submittedform.png')
  }
}





