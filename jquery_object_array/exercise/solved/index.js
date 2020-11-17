/* align all content to the center */
$(".content").css("text-align", "center");

/*
  - create an array for the phone rings
  - each index in the array should be an object that contains:
    - name of the ring
    - path to the audio file
*/
var phoneRings = [
  {
    name: "Phone Ring 1",
    audioFilePath: "audio/phone_ring_1.m4a"
  },
  {
    name: "Phone Ring 2",
    audioFilePath: "audio/phone_ring_2.m4a"
  },
  {
    name: "Phone Ring 3",
    audioFilePath: "audio/phone_ring_3.m4a"
  },
  {
    name: "Phone Ring 4",
    audioFilePath: "audio/phone_ring_4.m4a"
  }
]

/* declare a variable called 'index' and set it to 0 */
var index = 0;

/*
  Create a function called appendRingInfo
  Give it two parameters
  - the current array index
  - the actual array
*/
function appendRingInfo(arrayIndex, array){
  //empty the 'current-ring' class on the dom
  $(".current-ring").empty();

  //set the current indexContent using the array and the index value
  var indexContent = array[arrayIndex];

  //create a p tag
  var nameP = $("<p>");
  //the text of the p tag should be the name property value
  //from the object in the current index of the array
  nameP.text(indexContent.name);

  //create an audio tag
  var audio = $("<audio>");
  //add a class to the audio called 'current-ring-audio'
  audio.addClass('current-ring-audio');
  //create a source html element
  var source = $("<source>");
  //add a 'src' attribute to thae source element and give it a value of
  //the path of the audio from the object at the current index in the array
  source.attr("src", indexContent.audioFilePath)
  //add a type attribute and assign it a value of "audio/mpeg"
  source.attr("type", "audio/mpeg")
  //append the source element to the audio element
  audio.append(source);

  //append the audio element to the 'current-ring' class on the dom
  $(".current-ring").append(nameP).append(audio);
}


//call the appendRingInfo function
//using the current value of the 'index' variable and the rings array
appendRingInfo(index, phoneRings);

//when the html element with an id of 'play-ring' is clicked
$("#play-ring").click(function(){
  //play the audio tag with a class of 'current-ring-audio'
  //with help from this link here for playing audio created through jQuery
  //https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked
  $(".current-ring-audio")[0].play();
});

//when the html element with an id of 'display-next-ring' is clicked
$("#display-next-ring").click(function(){
  //increment the index variable value by 1
  index++;
  //if the index value is equal to the length of the rings array
  if(index == phoneRings.length){
    //re-assign the value of the 'index' variable to 0
    index = 0;
  }
  //call the appendRingInfo function
  //using the current value of the 'index' and the rings array
  appendRingInfo(index, phoneRings);
})
