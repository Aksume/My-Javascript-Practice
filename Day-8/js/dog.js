

// Day 8
// Concepts
// Take Home Review
// Objects
// Daily Challenge
// Classes
// Take Home Challenge
// Take Home Review
// Questions?
// Objects
// Properties
// "key: "value" pair
// Property Keys
// Unique. No spaces. Special characters allowed if surrounded by quotes
// Property Values
// Not unique. Can be: strings, numbers, booleans, arrays, methods (functions), etc)
// Access values using dot notation
// MDN Reference: Objects
// Daily Challenge
// Create a new codepen
// Congrats, you got a new dog!
// Create an object named "dog"
// Name and describe your dog
// Add a property to your dog object called "name" and assign a name
// Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// Let's teach it some tricks
// Give your dog a property called “speak” and assign a function that will alert “woof!”
// Add another method to teach your dog one more trick
// BONUS: Display your dog object values in HTML



const dog = {
    name: "wisky",
    legs: 4,
    color: "black",
    speak: () =>
        alert("woof!")
    
}


dog.speak()


const createli = () => {
	const li = document.createElement("li");
	return document.body.appendChild(li);
};
createli().innerHTML = dog.name;
createli().innerHTML = dog.legs;
createli().innerHTML = dog.color;









//   console.log(appendChild);
//  console.log(dog.name);
//  console.log(dog["name"]);

//  dog.meat = "unkown meat";
// console.log(dog);
//  dog.name = "wisky dog";
//  console.log(dog);

// const nextButton = document.createElement("div");
//  nextButton.textContent = Object.values(dog.speak);

// document.body.append(nextButton)

// nextButton.innerHTML = dog.name


// https://www.learnhowtoprogram.com/fidgetech-2-intermediate-javascript/2-1-object-oriented-javascript/2-1-0-2-javascript-objects

// https://www.sitepoint.com/javascript-settimeout-function-examples/

