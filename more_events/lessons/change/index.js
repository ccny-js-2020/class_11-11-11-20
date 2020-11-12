$("#cars").change(function(e){
  console.log(e.target.value)
});

var animals = ["rat", "moose", "fish", "worm", "bear"];

var select = $("<select>");
select.addClass("animals-select");

var defaultOption = $("<option>");
defaultOption.attr("selected", true).attr("disabled", true).attr("hidden", true)
defaultOption.text("Select an Animal");

select.append(defaultOption);
for(var i = 0; i < animals.length; i++){
  var option = $("<option>");
  option.text(animals[i]);
  option.val(animals[i]);
  select.append(option);
}
$(".animals-select-div").append(select);

///both of these events work to the value of the dropdown when changed

// $(".animals-select").change(function(e){
//     console.log(e.target.value);
// });

$(document).on("change", ".animals-select", function(e){
    console.log(e.target.value);
});
