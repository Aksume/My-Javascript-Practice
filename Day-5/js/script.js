
// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function


function registerName() {
    var a =  document.getElementById("input").value;
    if (a % 2 == 0) {
    alert ("even")
    
    }
    else {
         alert("odd");
    }
}
// console.log(registerName());

//Write a function that accepts a password(string)
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected


function validate() {
	//let red = /\bJoh?n(athan)?Doe\b/g
    const re = 
        // /[a-z]/
        // if (document.form1.txtInput.value.match(/^[a-z]\w{6,20}/)) {
        // ;
    document.form1.txtInput.value.match(/^[a-z]\w{6,20}/)

    
	if (!document.form1.txtInput.value.match(re)) {
	console.log("please enter vaild value");
	} else {
		alert("success");
	}
}
// console.log(validate());





