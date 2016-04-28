function itemDescriptionWidth(itemID){
  var currentWidth = $(".item-"+itemID+"-description").css("width");
  var parentWidth = $(".item-"+itemID+"-description").parent().css("width");
  var hasImage = $(".item-"+itemID+"-picture").val();
 
  if(currentWidth == parentWidth && hasImage!= undefined){
    currentWidth = "80%"
  }else{
    currentWidth = "100%";
  }

  $(".item-"+itemID+"-description, .item-"+itemID+"-ingredients").css("width",currentWidth);
}

function itemNameClick(itemID){
    $(".item-"+itemID+"-name").click(function(){
      $(".item-"+itemID+"-picture, .item-"+itemID+"-ingredients").toggle();
      itemDescriptionWidth(itemID);
    });
}


function initializeEditItemButton(item){
  var itemId = item.id;
  var editItemName = document.getElementsByClassName("item_"+itemId+"_name")[0];
  var editItemPrice = document.getElementsByClassName("item_"+itemId+"_price")[0];
  var editItemDescription = document.getElementsByClassName("item_"+itemId+"_description")[0];
  var editItemButton = document.getElementsByClassName("edit-item-"+itemId+"-button")[0];

  editItemName.value = item.name;
  editItemPrice.value = item.price;
  editItemDescription.value = item.description;

  editItemButton.setAttribute('disabled','disabled');
}

function editItemTextCheck(item){
  var itemId = item.id;
  var editItemName = document.getElementsByClassName("item_"+itemId+"_name")[0];
  var editItemPrice = document.getElementsByClassName("item_"+itemId+"_price")[0];
  var editItemDescription = document.getElementsByClassName("item_"+itemId+"_description")[0];
  var editItemButton = document.getElementsByClassName("edit-item-"+itemId+"-button")[0];

  if(editItemName.value!='' && editItemPrice.value!='' && editItemDescription.value!=''){
    if(editItemName.value!= item.name){
      editItemButton.removeAttribute('disabled');
    }else{
      editItemButton.setAttribute('disabled','disabled');
    }
  }else{
    editItemButton.setAttribute('disabled','disabled');
  }
}



