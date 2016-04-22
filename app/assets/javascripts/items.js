function itemDescriptionWidth(itemID){
  var currentWidth = $(".item-"+itemID+"-description").css("width");
  var parentWidth = $(".item-"+itemID+"-description").parent().css("width");
  var hasImage = $(".item-"+itemID+"-picture img").attr("src");
  if(currentWidth == parentWidth && hasImage.length!=0){
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


function editItemButtonCheck(itemID){
  var editItemButton = '.edit-item-'+itemID+'-button';
  var name = ".item_"+itemID+"_name";
  var price = ".item_"+itemID+"_price";
  var description = ".item_"+itemID+"_description";

  $(editItemButton).attr('disabled','disabled');
  
  //initial check for field
  var nameCheck = $(name).val();
  var priceCheck = $(price).val();
  var descriptionCheck = $(description).val();

  if(nameCheck!="" && priceCheck!="" && descriptionCheck!=""){
    $(editItemButton).removeAttr('disabled');
  }
  //check after field is edited
  $(name).add(price).add(description).keyup(function(){
    nameCheck = $(name).val();
    priceCheck = $(price).val();
    descriptionCheck = $(description).val();
    
    if(nameCheck!="" && priceCheck!="" && descriptionCheck!=""){
      $(editItemButton).removeAttr('disabled');
    }else{
      $(editItemButton).attr('disabled','disabled');
    }
  });
}

$(document).ready(function(){
  var numOfItems = items.length;
  for(var i=0; i<numOfItems; i++){
    itemNameClick(items[i].id);
    editItemButtonCheck(items[i].id);
  }
});



