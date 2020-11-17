/*
1
  When you hover over a button add the 'add-shadow' class, also make the pointer a cursor
  When you get off of a button, remove the 'add-shadow' class
*/
$("#hover-button").hover(function(){
  $(this).addClass('add-shadow');
});

$("#hover-button").mouseleave(function(){
  $(this).removeClass('add-shadow');
});

/*
2
  if the prepend button is clicked, prepend the list item to the list
  if the append button is clicked, append the list item to the list
*/
$("#prepend-name-button").click(function(){
  var nameInput = $("#name-input").val();
  var li = $("<li>");
  li.text(nameInput);

  $("ul").prepend(li);
});

$("#append-name-button").click(function(){
  var nameInput = $("#name-input").val();
  var li = $("<li>");
  li.text(nameInput);

  $("ul").append(li);
});
