var a = prompt("Enter first number");
var b = prompt("Enter second number");

alert(a, b);
// 4. Compare the two numbers 2nd method
//  function compare(num1, num2, num3) {		
// 		if (num2 > num1 && num1 > num3) {
// 			return num1 + " is the biggest number";
// 		} else if (num2 > num1 && num2 > num3) {
// 			return num2 + " is the biggest number";
// 		} else {
// 			return num3 + " is the biggest number";
// 		}
//  }
// var results = compare(25, 400, 35);
//  alert(results);
// console.log(results);
//  *************************************************
// /4. Compare the two numbers 
// ------------ DAILY CHALLENGE ------------Sampleone
// Prompt the user for two different numbers
// const x = Number(prompt("first number"));
// const y = Number(prompt("second number"));

// // Convert the values to integers
// const t = parseInt(x);
// const z = parseInt(y);

// // Store the two integers as variables
// // Compare the two numbers

// if (t > z) {
//     alert(t)
// } else {
//     alert(z);
// }
// proper one 4. Compare the two numbers

var numberone = Number(prompt("First Number"));
var numbertwo = Number(prompt("Second Number"));

// Convert the values to integers

var integer1 = parseInt(numberone);
var integer2 = parseInt(numbertwo);
var sum1 = integer1 * integer2;
console.log(sum1);

// Store the two integers as variables
// Compare the two numbers

function compare(integer1, integer2) {
	if (integer1 > integer2) {
		return alert(integer1);
	} else {
		return alert(integer2);
	}
}

// venson
function askForNumber(whichNumber) {
	const number = parseInt(prompt("Give me a number for number" + whichNumber));
	if (isNaN(number)) {
		return askForNumber(whichNumber);
	}
	return number;
}

const number1 = askForNumber(1);
const number2 = askForNumber(2);

if (number1 > number2) {
	alert("number 1 is greater: " + number1 + " > " + number2);
} else if (number2 > number1) {
	alert("number 2 is greater: " + number1 + " < " + number2);
} else {
	alert("they are equal: " + number1 + " === " + number2);
}
