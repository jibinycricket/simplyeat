
//Decides if there is extra info to display or not
function extraItemInfo(itemId){
  var itemPicture = document.getElementsByClassName("item-"+itemId+"-picture")[0];
  var itemIngredients = document.getElementsByClassName("item-"+itemId+"-ingredients")[0];
  if(typeof itemPicture != 'undefined'){
    if (itemPicture.style.display == 'block'){
      itemPicture.style.display ='none';
    }else{
      itemPicture.style.display = 'block';
    }
  }

  if(typeof itemIngredients!='undefined'){
    if (itemIngredients.style.display == 'block'){
      itemIngredients.style.display ='none';
    }else{
      itemIngredients.style.display = 'block';
    }
  }

  extraItemInfoWidth(itemId, itemPicture, itemIngredients);
}

//If there is extra info & a picture change width to fit

function extraItemInfoWidth(itemId, itemPicture, itemIngredients){
  var itemDescription = document.getElementsByClassName("item-"+itemId+"-description");
  var currentWidth = itemDescription[0].offsetWidth;
  var parentWidth = itemDescription[0].parentElement.offsetWidth;

  if(currentWidth == parentWidth && typeof itemPicture!='undefined'){
    if(typeof(itemIngredients)!= 'undefined'){
      itemIngredients.style.width = "80%";
    }
    itemDescription[0].style.width = "80%";
  }else{
    itemDescription[0].style.width = "100%";
    if(typeof(itemIngredients)!= 'undefined'){
      itemIngredients.style.width = "100%";
    }
  }
}

//Reset Item Fields when edit button is pressed
function initializeEditItemButton(item){
  var itemId = item.id;
  var editItemName = document.getElementsByClassName("item_"+itemId+"_name")[0];
  var editItemPrice = document.getElementsByClassName("item_"+itemId+"_price")[0];
  var editItemDescription = document.getElementsByClassName("item_"+itemId+"_description")[0];
  var editItemButton = document.getElementsByClassName("edit-item-"+itemId+"-button")[0];
  var editItemPicture = document.getElementsByClassName("item_"+itemId+"_picture")[0]; 
  var editItemDropdown = document.getElementsByClassName("item_"+itemId+"_dropdown")[0];

  editItemName.value = item.name;
  editItemPrice.value = item.price;
  editItemDescription.value = item.description;
  editItemDropdown.value = item.section_id;

  editItemButton.setAttribute('disabled','disabled');
}

//Check edit item fields for change
function editItemTextCheck(item){
  var itemId = item.id;
  var editItemName = document.getElementsByClassName("item_"+itemId+"_name")[0];
  var editItemPrice = document.getElementsByClassName("item_"+itemId+"_price")[0];
  var editItemDescription = document.getElementsByClassName("item_"+itemId+"_description")[0];
  var editItemIngredients = document.getElementsByClassName("item_"+itemId+"_ingredients")[0];
  var editItemPicture = document.getElementsByClassName("item_"+itemId+"_picture")[0]; 
  var editItemDropdown = document.getElementsByClassName("item_"+itemId+"_dropdown")[0];
  var editItemButton = document.getElementsByClassName("edit-item-"+itemId+"-button")[0];

  if(editItemName.value!='' && editItemPrice.value!='' && editItemDescription.value!=''){
    if(editItemDropdown.value!=item.section_id || editItemName.value!= item.name || editItemPrice.value!= item.price || editItemDescription.value!=item.description || editItemIngredients.value!= item.ingredients || editItemPicture.value!=''){
      editItemButton.removeAttribute('disabled');
    }else{
      editItemButton.setAttribute('disabled','disabled');
    }
  }else{
    editItemButton.setAttribute('disabled','disabled');
  }
}



