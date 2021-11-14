// var a = prompt("Enter first number");
// var b = prompt("Enter second number");

// alert(a, b);
//4. Compare the two numbers 2nd method
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
// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
const x = Number(prompt("first number"));
const y = Number(prompt("second number"));

// Convert the values to integers
const t = parseInt(x);
const z = parseInt(y);

// Store the two integers as variables
// Compare the two numbers

if (t > z) {
    alert(t)
} else {
    alert(z);
}