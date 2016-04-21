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

function itemNameClick(value){
  var itemID = items[value].id;
    $(".item-"+itemID+"-name").click(function(){
      $(".item-"+itemID+"-picture, .item-"+itemID+"-ingredients").toggle();
      itemDescriptionWidth(itemID);
    });
}

function newItemButtonCheck(){
  $('.new-item-button').attr('disabled','disabled');
  var name = $(".item_name").val();
  var price = $(".item_price").val();
  var description = $(".item_description").val();
  //initial check for field
  if(name!=""){
    $('.new-item-button').removeAttr('disabled');
  }
  //check after field is edited
  $('.item_name, .item_price, .item_description').keyup(function(){
    name = $(".item_name").val();
    price = $(".item_price").val();
    description = $(".item_description").val();
    if(name!="" && price!="" && description!=""){
      $('.new-item-button').removeAttr('disabled');
    }else{
      $('.new-item-button').attr('disabled','disabled');
    }
  });
}

function editItemButtonCheck(){
  $('.edit-item-button').attr('disabled','disabled');
  var name = $(".item_name").val();
  var price = $(".item_price").val();
  var description = $(".item_description").val();
  //initial check for field
  if(name!="" && price!="" && description!=""){
    $('.edit-item-button').removeAttr('disabled');
  }
  //check after field is edited
  $('.item_name, .item_price, .item_description').keyup(function(){
    name = $(".item_name").val();
    price = $(".item_price").val();
    description = $(".item_description").val();
    if(name!="" && price!="" && description!=""){
      $('.edit-item-button').removeAttr('disabled');
    }else{
      $('.edit-item-button').attr('disabled','disabled');
    }
  });
}

$(document).ready(function(){
  var numOfItems = items.length;
  for(var i=0; i<numOfItems; i++){
    itemNameClick(i);
  }

  newItemButtonCheck();
  editItemButtonCheck();
});



