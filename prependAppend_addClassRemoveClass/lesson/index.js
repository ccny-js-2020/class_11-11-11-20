// Prepend and Append
var firstLi = $("<li>");
firstLi.text("Here")
$("#whitesnake").prepend(firstLi);

var lastLi = $("<li>");
lastLi.text("Own")
$("#whitesnake").append(lastLi);

//Add Class and Remove Class
var num = 0;
$("#this-p").click(function(){
  num++;
  if(num % 2 == 0){
    $(this).removeClass("font-size-of-p")
    $(this).addClass('color-of-p')
  } else {
    $(this).removeClass("color-of-p")
    $(this).addClass('font-size-of-p')
  }
});
