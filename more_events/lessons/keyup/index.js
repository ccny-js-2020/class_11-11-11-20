$(document).keyup(function(e){
  //console.log(e)
  //"e" here holds attributes of the event that has been executed
  //in this case, attributes for the keyup event
  //which holds the value of the key that you pressed
  //console.log(e.key);

  $("#keyup-value").append(e.key);
});

$("#text-area").keyup(function(e){
  //value of the last key pressed in the text area
  console.log(e.key)

  //current value of what is in the text area
  console.log($(this).val());
});
