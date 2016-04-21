// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function newSectionButtonCheck(){
  $('.new-section-button').attr('disabled','disabled');
  var text = $(".section_name").val();
  //initial check for field
  if(text!=""){
    $('.new-section-button').removeAttr('disabled');
  }
  //check after field is edited
  $('.section_name').keyup(function(){
    text = $(".section_name").val();
    if(text!=""){
      $('.new-section-button').removeAttr('disabled');
    }else{
      $('.new-section-button').attr('disabled','disabled');
    }
  });
}

function editSectionButtonCheck(){
  $('.edit-section-button').attr('disabled','disabled');
  var text = $(".edit_section_name").val();
  //initial check for field
  if(text!=""){
    $('.edit-section-button').removeAttr('disabled');
  }
  //check after field is edited
  $('.edit_section_name').keyup(function(){
    text = $(".edit_section_name").val();
    if(text!=""){
      $('.edit-section-button').removeAttr('disabled');
    }else{
      $('.edit-section-button').attr('disabled','disabled');
    }
  }); 
}

$(document).ready(function(){
  newSectionButtonCheck();
  editSectionButtonCheck();
});

