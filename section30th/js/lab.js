function userInput() {
  let number;
  number=window.prompt("Please provide your first variable.");
  console.log(number);
  return number
}

let numberFirst = userInput();
let numberSecond = userInput();

console.log("numberFirst is " + numberFirst);
console.log("numberSecon is " + numberSecond);

results=numberFirst + numberSecond;

$(".calculator").append(numberFirst + " + ");
$(".calculator").append(numberSecond + " = ");
$(".calculator").append(results);


console.log("The result is " + results + " :)");