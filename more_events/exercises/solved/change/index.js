var bands = ["Van Halen", "Led Zeppelin", "The Who", "The Beatles", "The Rolling Stones"];

var select = $("<select>");
select.addClass("bands-select");

var defaultOption = $("<option>");
defaultOption.attr("selected", true).attr("disabled", true).attr("hidden", true)
defaultOption.text("Select a Band");

select.append(defaultOption);

for(var i = 0; i < bands.length; i++){
  var option = $("<option>");
  option.text(bands[i]);
  option.val(bands[i]);
  select.append(option);
}
$(".bands-select-div").append(select);

$(document).on("change", '.bands-select', function(e){
    $("#dropdown-option-selected").text(e.target.value);
});

$("#add-band-to-dropdown-button").click(function(){
  var inputBand = $("#add-band-to-dropdown-input").val();

  var option = $("<option>");
  option.text(inputBand);
  option.val(inputBand);

  $(".bands-select").append(option);
});
