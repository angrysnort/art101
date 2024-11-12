// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  //I chose to prepend it to a div that lies within the output div in order to get the most recent name appear closest to the input box. 
  $("#sorted-name").prepend('<div class="text"><p>' + "Here's your sorted username: " + userNameSorted + '</p></div>');
});