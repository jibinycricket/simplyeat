
/*********** Nav Bar *******/
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger to X toggle
    document.querySelector('#nav-toggle').addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

/******** Registration/Login Modal ********/
$(function() {
  $("#modal-1").on("change", function() {
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



