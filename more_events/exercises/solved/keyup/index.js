var htmlString = "";
$(document).keyup(function(e){
  //if a number is pressed, log it
  //if backspace is pressed
  //if enter is pressed, then you have to add a class to the current line being used, and remove the class when enter is pressed

  //https://www.w3schools.com/jsref/jsref_isnan.asp
  if(!isNaN(e.key)){
    console.log("number")
  }

  console.log(e.key)

  if(e.key == "Backspace"){
    htmlString = htmlString.slice(0, htmlString.length - 1);
    $(".current-p").text(htmlString)
  } else if (e.key == "Enter") {
    $(".current-p").removeClass('current-p');

    var newLine = $("<p>");
    newLine.addClass('current-p');

    $('.all-keyups').append(newLine);
    htmlString = "";
  } else {
    htmlString += e.key;
    $(".current-p").text(htmlString)
  }
});
