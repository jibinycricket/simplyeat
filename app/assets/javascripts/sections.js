// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function newSectionButtonCheck(){
  var newSectionButton = '.new-section-button';

  $(newSectionButton).attr('disabled','disabled');
  var text = $(".section_name").val();
  //initial check for field
  if(text!=""){
    $(newSectionButton).removeAttr('disabled');
  }
  //check after field is edited
  $('.section_name').keyup(function(){
    text = $(".section_name").val();
    if(text!=""){
      $(newSectionButton).removeAttr('disabled');
    }else{
      $(newSectionButton).attr('disabled','disabled');
    }
  });
}

function editSectionButtonCheck(sectionID){
  var editSectionButton = '.edit-section-'+sectionID+'-button';
  var editSectionName = ".edit_section_"+sectionID+"_name";

  $(editSectionButton).attr('disabled','disabled');
  var text = $(editSectionName).val();
  //initial check for field
  if(text!=""){
    $(editSectionButton).removeAttr('disabled');
  }
  //check after field is edited
  $(editSectionName).keyup(function(){
    text = $(editSectionName).val();
    if(text!=""){
      $(editSectionButton).removeAttr('disabled');
    }else{
      $(editSectionButton).attr('disabled','disabled');
    }
  }); 
}

function newItemButtonCheck(itemID){
  var newItemName = ".section_"+itemID+"_new_item_name";
  var newItemPrice = ".section_"+itemID+"_new_item_price";
  var newItemDescription = ".section_"+itemID+"_new_item_description";
  var newItemButton = '.new-section-'+itemID+'-item-button';
  $(newItemButton).attr('disabled','disabled');
  
  //Initial Field Check
  var nameCheck = $(newItemName).val();
  var priceCheck = $(newItemPrice).val();
  var descriptionCheck = $(newItemDescription).val();
  
  if(nameCheck!="" && priceCheck!="" && descriptionCheck!=""){
    $(newItemButton).removeAttr('disabled');
  }
  //check after field is edited
  $(newItemName).add(newItemPrice).add(newItemDescription).keyup(function(){
    console.log('here');
    nameCheck = $(newItemName).val();
    priceCheck = $(newItemPrice).val();
    descriptionCheck = $(newItemDescription).val();
    if(nameCheck!="" && priceCheck!="" && descriptionCheck!=""){
      $(newItemButton).removeAttr('disabled');
    }else{
      $(newItemButton).attr('disabled','disabled');
    }
  });
}

$(document).ready(function(){
  var numOfSections = sections.length;

  //Create a unique check for text fields for each section and newItem
  for(var j=0; j<numOfSections; j++){
    editSectionButtonCheck(sections[j].id);
    newItemButtonCheck(sections[j].id);
  }
  //Create a text field check for new section button
  newSectionButtonCheck();
});

