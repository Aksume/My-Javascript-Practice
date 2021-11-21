// for (var i = 1; i < 101; i++) {
// 	if (i % 15 == 0) console.log("FizzBuzz");
// 	else if (i % 3 == 0) console.log("Fizz");
// 	else if (i % 5 == 0) console.log("Buzz");
// 	else console.log(i);
// }

// FizzBuzz challenge
// Create a new codepen
// Write a function called fizzbuzz that will accept no arguments
// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// For every number that is divisible by 3 and 5, console log "FizzBuzz"
// For every number that is divisible by only 3 and not 5, console log "Fizz"
// For every number that is divisible by only 5 and not 3, console log "Buzz"


for (let i = 1; i <= 100; ++i) {
	if (i % 3 == 0) console.log("Fizz");
	if (i % 5 == 0) console.log("Buzz");
	if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
console.log(i);
}
