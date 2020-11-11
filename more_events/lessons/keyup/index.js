$(document).keyup(function(e){
  //"e" here holds attributes of the event that has been executed
  //in this case, attributes for the keyup event
  //which holds the value of the key that you pressed
  console.log(e.key);

  $("#keyup-value").append(e.key)
})
