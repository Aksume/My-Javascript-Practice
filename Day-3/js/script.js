// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS*
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday
// ***********************************
// Ans
document.getElementById("myButton").onclick = function () {
	var FName = document.getElementById("myText").value;
	var LName = document.getElementById("myTextL").value;
	var BName = document.getElementById("myTextB").value;
	alert(LName);
	confirm(BName);
	alert(BName);
	console.log("Hello", FName);
};
