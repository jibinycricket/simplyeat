
//Expands and Contracts Info Button
  function scheduleInfoButton(){
    var button = document.getElementsByClassName("schedule-info-button")[0];
    var preClickHTML = '<i class="fa fa-info"></i>';
    var postClickHTML = "If closed, leave the time for that day blank";
    currentHTML = button.innerHTML;
    currentHTML = currentHTML == preClickHTML ? postClickHTML : preClickHTML;
    button.innerHTML = "";
    button.classList.toggle("schedule-info-button-expand");
    $(button).delay(100).queue(function(n){
      $(this).html(currentHTML); n();
    });
  }

