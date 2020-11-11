$(".content").css("text-align", "center");

var animals = [
  {
    name: "Camel",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg"
  },
  {
    name: "Horse",
    image: "https://www.thesprucepets.com/thmb/KYaXBSM013GnZ2jEZJnX4a9oIsU=/3865x2174/smart/filters:no_upscale()/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg"
  },
  {
    name: "Grizzly Bear",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/GrizzlyBearJeanBeaufort.jpg"
  },
  {
    name: "Bull",
    image: "https://s.marketwatch.com/public/resources/images/MW-GK927_bull_b_MG_20180614134501.jpg"
  },
  {
    name: "Goldfish",
    image: "https://images-na.ssl-images-amazon.com/images/I/51UqOC3XQ7L._AC_SL1200_.jpg"
  }
]

var index = 0;
$("#start-slideshow-button").click(function(){
  $("#start-slideshow-button").hide();

  appendOrChangeContent(index, animals);
});

$(document).on("click", ".animal-image", function(){
  index++;
  if(index < animals.length){
    appendOrChangeContent(index, animals);
  } else {
    index = 0;
    appendOrChangeContent(index, animals);
  }
});

function appendOrChangeContent(arrayIndex, array){
  var animalIndex = array[arrayIndex];

  $(".content").empty();

  var animalName = $("<p>");
  animalName.text(animalIndex.name);

  var animalImage = $("<img>");
  animalImage.attr("src", animalIndex.image)
  animalImage.attr("height", 250);
  animalImage.attr("width", 250);
  animalImage.addClass("animal-image");

  $(".content").append(animalName).append(animalImage);
}
