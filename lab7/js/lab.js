// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// October 2024
// License: Public Domain

function allOfItBecauseIDontCare2() {
  var userName = window.prompt("Please enter your username", "xXTh3Ultim@teG@merXx");
  console.log("allOfItBecauseIDontCare2 =", allOfItBecauseIDontCare2);

  var stringToArray = userName.split('');
  console.log("stringToArray =", stringToArray);

  // Thank you to WesBot!
  var sortedArray = stringToArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  console.log("sortedArray =", sortedArray);

  var arrayToString = sortedArray.join('');
  console.log("arrayToString =", arrayToString);

  // Thank you to W3Schools!
  document.getElementById("warranty").innerHTML = "<br>Here's your sorted name, " + userName + ": " + arrayToString + ". Now, would you like to talk about your car's extended warranty? :)";
}
