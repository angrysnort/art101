// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// October 2024
// License: Public Domain

// Constants
const myTransport = ["The Bus" , "Dream Car: The Cadillac Hearse"] 

var myMainButAlsoDreamRide = {
  make: "Cadillac",
  model: "Hearse",
  color: "Black",
  year: 1970,
  age: function() {
      return 2024 - this.year;
  }
}

document.writeln("I only use two kinds of transport: " + myTransport[0] + " and my " + myTransport[1] + "</br>");
document.writeln("Here's the details for My Dream Ride, which I hope to someday be My Main Ride: <pre></br>", 
  JSON.stringify(myMainButAlsoDreamRide, null, '\t'), "</pre></br>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
//function myFunction(param1, param2) {
  // some code here
  // return results;
//}

//function main() {
  //console.log("Main function started.");
  // the code that makes everything happen
//}

// let's get this party started
//main();
