// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function initializeNewSectionButton(){
  var newSectionButton = document.getElementsByClassName('new-section-button')[0];
  var newSectionTextField = document.getElementById('section_name');

  newSectionTextField.value = '';
  newSectionButton.value = "Create Section";
  newSectionButton.setAttribute("disabled","disabled");
}

function newSectionTextCheck(sections){
  var newSectionButton = document.getElementsByClassName('new-section-button')[0];
  var newSectionTextField = document.getElementById('section_name').value;

  if(newSectionTextField!=''){
    for(var i = 0; i<sections.length; i++){
      if (newSectionTextField.toLowerCase() == sections[i].name.toLowerCase()){
        newSectionButton.setAttribute("disabled","disabled");
        break;
      }else{
        newSectionButton.removeAttribute('disabled');
      }
    }
    if(sections.length==0){
      newSectionButton.removeAttribute('disabled');
    }
  }else{
    newSectionButton.setAttribute("disabled","disabled");
  }
}

function intializeEditSectionButton(section){
  var sectionID = section.id;
  var editSectionTextField = document.getElementsByClassName("edit_section_"+sectionID+"_name")[0];
  var editSectionButton = document.getElementsByClassName("edit-section-"+sectionID+"-button")[0];
  var currentSectionName = document.getElementsByClassName("section-name-"+sectionID)[0].innerHTML;
  console.log(editSectionButton);
  editSectionButton.value = "Save Changes";
  editSectionButton.setAttribute('disabled','disabled');
  if(editSectionTextField.value != currentSectionName){
    editSectionTextField.value = currentSectionName;
  }
}

function editSectionTextCheck(section, sections){
  var sectionID = section.id;
  var editSectionTextField = document.getElementsByClassName("edit_section_"+sectionID+"_name")[0];
  var editSectionButton = document.getElementsByClassName("edit-section-"+sectionID+"-button")[0];
  editSectionButton.removeAttribute('disabled');
  if(editSectionTextField.value!=''){
    for(var i = 0; i <sections.length; i++){
      if(editSectionTextField.value.toLowerCase() == sections[i].name.toLowerCase()){
        editSectionButton.setAttribute('disabled','disabled');
        break;
      }else{
        editSectionButton.removeAttribute('disabled');
      }
    }
  }
}

function initializeNewItemButton(section){
  var sectionID = section.id;
  var newItemName = document.getElementsByClassName("section_"+sectionID+"_new_item_name")[0];
  var newItemPrice = document.getElementsByClassName("section_"+sectionID+"_new_item_price")[0];
  var newItemDescription = document.getElementsByClassName("section_"+sectionID+"_new_item_description")[0];
  var newItemButton = document.getElementsByClassName('new-section-'+sectionID+'-item-button')[0];
  var newItemDropdown = document.getElementsByClassName('new-item-section-'+sectionID+'-dropdown')[0];
  newItemName.value = "";
  newItemPrice.value = "";
  newItemDescription.value="";
  newItemDropdown.value = section.id;

  newItemButton.value = "Create New Item";
  newItemButton.setAttribute('disabled','disabled');
}

function newItemTextCheck(sectionID){
  var newItemName = document.getElementsByClassName("section_"+sectionID+"_new_item_name")[0];
  var newItemPrice = document.getElementsByClassName("section_"+sectionID+"_new_item_price")[0];
  var newItemDescription = document.getElementsByClassName("section_"+sectionID+"_new_item_description")[0];
  var newItemButton = document.getElementsByClassName('new-section-'+sectionID+'-item-button')[0];

  if (newItemName.value!='' && newItemPrice.value!='' && newItemDescription.value!=''){
    newItemButton.removeAttribute('disabled');
  }else{
    newItemButton.setAttribute('disabled','disabled');
  }
}

