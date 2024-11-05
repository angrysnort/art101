// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

// The original code me and my partner wrote is below!
// The following code satisfies the Task X requirement.

// Add a "Make Special" button to each special section
$(".special-section").append("<button class='make-special'>Make Special</button>");

// Add a click listener for all "Make Special" buttons
$(".make-special").click(function() {
  $(this).parent().toggleClass("special");
});

// Here's the code me and my partner wrote for the assignment originally. The code is actually operating off of my refined Task X code above!!
{/*
//Add Button for "Challenges" section
$("#challenges").append("<button id='button-challenges'>Make Special</button>");

//Add Button for "Problems" section
$("#problems").append("<button id='button-problems'>Make Special</button>");

//Add Button for "Reflections" section
$("#reflections").append("<button id='button-reflections'>Make Special</button>");

//Add a Click Listener to the Challenges Button

$("#button-challenges").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenges").toggleClass("special");
});

//Add a Click Listener to the Problems Button

$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});

//Add a Click Listener to the Reflections Button

$("#button-reflections").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#reflections").toggleClass("special");
});
*/}