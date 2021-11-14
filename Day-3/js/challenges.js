// 1. Prompt the user for their first name

var Fname = String(prompt("First Name"));

console.log(Fname);
// 2.Store their input to a variable
function getInputFromTextBox() {
	var input = document.getElementById("userInput").value;
	console.log(input);
}
 getInputFromTextBox(); 

// 3. Reverse your user’s name
function nameRevers(str) {
	// return str.split(" ").reverse().join(" ");
	var alert1 = str.split(" ").reverse().join(" ");
	console.log(alert1);
}
// console.log(nameRevers("Sara Mahamod"));
nameRevers("Sara Mahamod");

// 4. alert the reversed string

//  challenge2
//1. Prompt for a number value (provide a default of 10)
var Numbervalue1 = prompt("default value", 10);
if (Numbervalue1 != null) {
	document.getElementById("demo1").innerHTML = Numbervalue1;
}
// 2.Prompt for a second number value (provide a default of 10)
var Numbervalue2 = prompt("default value", 10);
if (Numbervalue2 != null) {
	document.getElementById("demo2").innerHTML = Numbervalue2;
}
//3. Convert the prompted values into integers using parseInt()
var integer = parseInt(Numbervalue1);
console.log(integer);
var integer1 = parseInt(Numbervalue1);
console.log(integer1);
//4. Add the numbers together and alert the user with the result
// Ans
var firstNumber = prompt("Enter the first number");
var secondNumber = prompt("Enter the second number");

var theTotal = parseInt(firstNumber) + parseInt(secondNumber);
alert(firstNumber + " added to " + secondNumber + " equals: " + theTotal);
console.log(firstNumber + " added to " + secondNumber + " equals: " + theTotal);
