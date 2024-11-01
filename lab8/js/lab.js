// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// October 2024
// License: Public Domain


// Here's my original code, the one I originally put into my browser's console log.
  //let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //console.log("Here's my darling array: ", array);

  //function add10(x){
  //  var results = 10 + x
  //  return results;
  //}

  //let addedResults = array.map(add10);
  //console.log("Here's what happens to it when you add 10 to each number: ", addedResults);

  //array.map(function(x) {
  //  var results = 7 - x;
  //  return results;
  //});

  //let subbedResults = array.map(function);
  //console.log("And here's what happens to it when you subtrct 7 from each number: ", results);

  //var mapResults = array.map(add10);
  //console.log("Here's what happens when you add 10 to each number in it: ", mapResults)

//Here's my cleaned-up code, courtesy of ChatGPT. It de-isolated the results variables by just getting rid of them entirely.
//Here I define the array, and then call the results into the console log.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Here's my darling array: ", array);

// Here I add 10 to each number in my array.
function add10(x) {
  return 10 + x;
}

//I've mapped the results of the add10 function on my array to a new variable: addedResults. And then, I console logged it.
let addedResults = array.map(add10);
console.log("Here's what happens to it when you add 10 to each number: ", addedResults);

//I've " use[d] a new anonymous function as a callback with map to do some new operation on each of the numbers in [my] array."
let subbedResults = array.map(function(x) {
  return 7 - x;
});

//And then logged it.
console.log("And here's what happens to it when you subtract 7 from each number: ", subbedResults);

//And here begins my work for Task X
// Use jQuery to select the element by its ID and set the HTML content
$("#output").html("Here's my darling array: " + array + "<br>" +
  "Here's what happens to it when you add 10 to each number: " + addedResults + "<br>" +
  "And here's what happens to it when you subtract 7 from each number: " + subbedResults
);
