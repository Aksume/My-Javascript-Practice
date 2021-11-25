let form = document.getElementById("registration-form");
form.onsubmit = submit;
function submit(e) {
    e.preventDefault();
    const firstName = document.getElementById("fn").value
    const lastName = document.getElementById("ln").value
    const eMail = document.getElementById("em").value
    let confirmationHolder = document.getElementById("confirmation");
    let confirmationMessage = "You entered this values: <br>";
    
    if (eMail === "") {
        confirmationHolder.innerHTML = "email field is required";
    }
    if (firstName === "") {
        confirmationHolder.innerHTML = "First name field is required";
    }
        if (lastName === "") {
            confirmationHolder.innerHTML = "last name field is required";
        } else {
            confirmationHolder.innerHTML =
                confirmationMessage + 
                "First name: " +
                firstName +
                "<br>" +
                "Last name: " +
                lastName +
                "<br>" +
                "Email: " +
                eMail +
                "<br>";
        };
    }


