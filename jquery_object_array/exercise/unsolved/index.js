/* align all content to the center */

/*
  - create an array for the phone rings
  - each index in the array should be an object that contains:
    - name of the ring
    - path to the audio file
*/

/* declare a variable called 'index' and set it to 0 */

/*
  Create a function called appendRingInfo
  Give it two parameters
  - the current array index
  - the actual array
*/
  //empty the 'current-ring' class on the dom

  //set the current indexContent using the array and the index value

  //create a p tag

  //the text of the p tag should be the name property value
  //from the object in the current index of the array


  //create an audio tag

  //add a class to the audio called 'current-ring-audio'

  //create a source html element

  //add a 'src' attribute to thae source element and give it a value of
  //the path of the audio from the object at the current index in the array

  //add a type attribute and assign it a value of "audio/mpeg"

  //append the source element to the audio element

  //append the p tag element and audio element to the 'current-ring' class on the dom


//call the appendRingInfo function
//using the current value of the 'index' variable and the rings array

//when the html element with an id of 'play-ring' is clicked
  //play the audio tag with a class of 'current-ring-audo'
  //with help from this link here for playing audio created through jQuery
  //https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked

//when the html element with an id of 'display-next-ring' is clicked
  //increment the index variable value by 1
  //if the index value is equal to the length of the rings array
    //re-assign the value of the 'index' variable to 0
  //call the appendRingInfo function
  //using the current value of the 'index' and the rings array
