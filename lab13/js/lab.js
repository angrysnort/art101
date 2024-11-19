// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

// FizzBuzz Function
// This function loops through numbers from 1 to 200 and prints:
// "Fizz!" if the number is divisible by 3,
// "Buzz!" if the number is divisible by 5,
// "Boom!" if the number is divisible by 7,
// Combines them accordingly if a number is divisible by more than one of 3, 5, or 7.

function fizzBuzz() {
  // Initialize a string to store the output
  let oneLongString = "";

  // Loop through numbers from 1 to 200
  for (let num = 1; num <= 200; num++) {
      let str = ""; // Reset str for each number

      // Check divisibility by 3, 5, or 7 and append corresponding strings
      if (num % 3 === 0) {
          str += "Fizz";
      }
      if (num % 5 === 0) {
          str += "Buzz";
      }
      if (num % 7 === 0) {
          str += "Boom";
      }

      // If str is empty, just output the number
      if (str === "") {
          str = num;
      }

      // Append the result to the output string
      oneLongString += str + "<br>";
  }

  // Output the result to the div with id "output"
  $("#output").html(oneLongString);
}

// Call the function to execute
fizzBuzz();
