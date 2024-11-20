// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

// Here is the original code we wrote in class with Wes:
/*
for(let i=1;i<+201;i++) {
  if (i%3 == 0) {
    console.log("Fizz!");
  }
  else if (i%5 == 0) {
    console.log("Buzz!");
  }
  else if (i%7 == 0) {
    console.log("Boom!");
  }
  else if (i%15 == 0) {
    console.log("FizzBuzz!");
  }
  else {
     console.log(i);
  }
}*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// For the sake of submitting SOMETHING on time I had ChatGPT refactor the code we wrote in lecture with Wes while it kept the instructions for the lab in mind. However, I have since gone back and taken the time to understand what the code actually means, because trying to use any version closer to the code Wes wrote for us has led to nothing but errors or nothing showing up.
// Also, the new code fulfills Task X as a bonus.

function fizzBuzz() {
  // oneLongString needs to start as an empty string so that the function can actually store the additional strings inside of it while also adding/appending Fizz, Buzz, Boom etc. to the numbers that need them.
  let oneLongString = "";

  // In the previous function, we just did "If i/num is less than 201." It's more simple to just use "If num is equal to or less than 200."
  // Here's where it gets complicated, and the reason the code Wes provided in class simply doesn't work for this assignment. If we were to use anything like Wes' code, we'd have to make if/ if else statements for EVERY SINGLE POSSIBLE OUTCOME. So Fizz, Buzz, Boom, FizzBuzz, FizzBoom, BuzzBoom, etc.
        // Obviously, that's a horrible idea.

      // So, instead, it just appends things! If the number in question fulfills multiple conditions, then it will just append new words to the end. This is why the else if statements have been taken away.

  for (let num = 1; num <= 200; num++) {

      // Finally, the 'str' variable needs to start out blank (or, in this case, the number in question and a colon so you can still see the number) so they can be properly appended to.
      // Prompt 2 for Task X: Defining the str and num constants to make it easier to change values and text.
      let str = num + ": "; 
      // Also, we're using absolute comparison (===) instead of loose comparison (==) just to minimize the risk of incorrect output.
      if (num % 3 === 0) {
        str += "Fizz";
      }
      if (num % 5 === 0) {
        str += "Buzz";
      }
      if (num % 7 === 0) {
        str += "Boom";
      }
      // Prompt 1 for Task X: Adding the additonal factor.
      if (num % 9 === 0) {
        str += "Bang";
      }
      // If a number doesn't get any Fizz, Buzz, Boom or Bang, it gets crickets.
      if (str === num + ": ") {
        str = num + ": <em>crickets</em>";
      }
      // And here's where it puts the result into oneLongString with line breaks between each number.
      oneLongString += str + "<br>";
  }

  // Outputs into the output div.
  $("#output").html(oneLongString);
}

// Calls the function, excuting it.
fizzBuzz();
