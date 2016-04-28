// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function intializeNewSectionButton(){
  var newSectionButton = document.getElementsByClassName('new-section-button')[0];
  var newSectionTextField = document.getElementById('section_name');

  newSectionTextField.value = '';
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
  }else{
    newSectionButton.setAttribute("disabled","disabled");
  }
}

function intializeEditSectionButton(section){
  var sectionID = section.id;
  var editSectionTextField = document.getElementsByClassName("edit_section_"+sectionID+"_name")[0];
  var editSectionButton = document.getElementsByClassName("edit-section-"+sectionID+"-button")[0];
  editSectionButton.setAttribute('disabled','disabled');

  if(editSectionTextField.value != section.name){
    editSectionTextField.value = section.name;
  }
}

function editSectionTextCheck(section, sections){
  var sectionID = section.id;
  var editSectionTextField = document.getElementsByClassName("edit_section_"+sectionID+"_name")[0];
  var editSectionButton = document.getElementsByClassName("edit-section-"+sectionID+"-button")[0];
  
  if(editSectionTextField.value!=''){
    for(var i = 0; i<sections.length; i++){
      if (editSectionTextField.value.toLowerCase() == sections[i].name.toLowerCase()){
        editSectionButton.setAttribute("disabled","disabled");
        break;
      }else{
        editSectionButton.removeAttribute('disabled');
      }
    }
  }else{
    editSectionButton.setAttribute("disabled","disabled");
  }
}

function initializeNewItemButton(section){
  var sectionID = section.id;
  console.log(sectionID);
  var newItemName = document.getElementsByClassName("section_"+sectionID+"_new_item_name")[0];
  var newItemPrice = document.getElementsByClassName("section_"+sectionID+"_new_item_price")[0];
  var newItemDescription = document.getElementsByClassName("section_"+sectionID+"_new_item_description")[0];
  var newItemButton = document.getElementsByClassName('new-section-'+sectionID+'-item-button')[0];

  newItemName.value = "";
  newItemPrice.value = "";
  newItemDescription.value="";

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


/* Create an initalize function when newItem button is clicked
create another function that checks when typing, if fields are filled
enable button*/
