/*
Name: Victor (Alex) Zapata
Date created: 04/13/2025
Date last edited: 05/04/2025
Version: 1.0
Description: Homework 4 Javascript
*/ 
/* MISSO was used as a reference for this assignemnt */

//Validate First Name
function validateFirstname()
{
    firstname = document.getElementById("firstname").value.trim();
    var namePattern = /^[a-zA-Z'-]{1,30}$/;

    if (firstname == "") 
    {
        document.getElementById("firstname-error").innerHTML = 
        "Please enter a valid first name, cannot be blank";
        return false;
    } 
    
    else if (firstname != "") {
         if (!firstname.match(namePattern)) {
            document.getElementById("firstname-error").innerHTML = 
            "Letters, apostrophes, and dashes only";
            return false;
         } 

         else if (firstname.length < 2) {
            document.getElementById("firstname-error").innerHTML = 
            "First name cannot have less than two characters";
            return false;
         }

         else if (firstname.length > 30) {
            document.getElementById("firstname-error").innerHTML =
            "First name cannot have more than 30 characters";
            return false;
         }

         else {
            document.getElementById("firstname-error").innerHTML = "";
            return true;
         }
    }
}

//Validate Middle Initial
function validateMiddleinitial()
{
    let middleinitial = document.getElementById("middleinitial").value;
    const namePattern = /^[A-Z]+$/;

    middleinitial = middleinitial.toUpperCase();
    document.getElementById("middleinitial").value = middleinitial;

    if (!middleinitial.match(namePattern)) {
        document.getElementById("middleinitial-error").innerHTML =
        "Middle initial must be a single uppercase letter";
    }

    else {
        document.getElementById("middleinitial-error").innerHTML = "";
        return true;
    }
}

//Validate Last Name
function validateLastname()
{
    lastname = document.getElementById("lastname").value.trim();
    var namePattern = /^[a-zA-Z'-]{1,30}$/;

    if (lastname == "") 
    {
        document.getElementById("lastname-error").innerHTML = 
        "Please enter a valid last name, cannot be blank";
        return false;
    } 
    
    else if (lastname != "") {
         if (!lastname.match(namePattern)) {
            document.getElementById("lastname-error").innerHTML = 
            "Letters, apostrophes, and dashes only";
            return false;
         } 

         else if (lastname.length < 2) {
            document.getElementById("lastname-error").innerHTML = 
            "Last name cannot have less than two characters";
            return false;
         }

         else if (lastname.length > 30) {
            document.getElementById("lastname-error").innerHTML =
            "Last name cannot have more than 30 characters";
            return false;
         }

         else {
            document.getElementById("lastname-error").innerHTML = "";
            return true;
         }
    }
}

// Validate Date of Birth
function validateDateofbirth()
{
    dob = document.getElementById("dateofbirth");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() -120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be in the future"
        dob.value="";
        return false;
    } 
    
    else if(date < new Date(maxDate)) {
       document.getElementById("dob-error").innerHTML = 
       "Date cannot be more than 120 years ago"
       dob.value="";
       return false; 
    } else
    
    {
     document.getElementById("dob-error").innerHTML = "";
     return true;
    }
}

// Validate Social Security Num
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } 
    
    else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

//Validate Address
function validateAddressline() {
    var address = document.getElementById("addressline").value;
    console.log(address);
    console.log(address.length);

    if (address.length < 2) {
        document.getElementById("addressline-error").innerHTML =
        "Address cannot be left blank"
        return false;
    } 
    
    else {
        document.getElementById("addressline-error").innerHTML = "";
        return true;
    }
}

//Validate City
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = 
        "City cannot be left blank";
        return false;
    } 
    
    else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Validate Zip Code
function validateZipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = 
        "Zip code cannot be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5)
    }

    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}

// Validate Phone Num
function validatePhonenumber() {
  const phoneInput = document.getElementById("phonenumber");
        const phone = phoneInput.value.replace(/\D/g,""); 

        if (phone.length !==10) {
          document.getElementById("phonenumber-error").innerHTML = 
          "Phone number cannot be left blank.";
          return false; 
        }

        const formattedPhone =
        phone.slice(0,3) + "-" + phone.slice(3,6) + "-" +phone.slice(6,10)
        phoneInput.value = formattedPhone;
        document.getElementById("phonenumber-error").innerHTML = "";
        return true;
}

// Validate Email
function validateEmailaddress() {  
    var emailaddress = document.getElementById("emailaddress").value;
    var emailaddressR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailaddress.length == 0) {
        document.getElementById("emailaddress-error").innerHTML = 
        "Email cannot be left blank";
        return false;
    }
  
    if (!emailaddressR.test(emailaddress)) {
        document.getElementById("emailaddress-error").innerHTML = 
        "Enter a valid email address";
        return false;
    } else {
        document.getElementById("emailaddress-error").innerHTML = "";
        return true;
    }
} 

// Validate Username
function validateUserid() {
    userid = document.getElementById("userid").value.toLowerCase();
    document.getElementById("userid").value = userid;

    if (userid.length == 0) {
        document.getElementById("userid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(userid.charAt(0))) {
        document.getElementById("userid-error").innerHTML = 
        "User ID cannot start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(userid)) {
        document.getElementById("userid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } 
    
    else if (userid.length < 5) {
        document.getElementById("userid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } 
    
    else if (userid.length > 30) {
        document.getElementById("userid-error").innerHTML = 
        "User ID cannot exceed 30 characters";
        return false;
    } 
    
    else {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

// Validate Password
function validatePassword() {
    pword = document.getElementById("password").value.toLowerCase();
    errorMessage = document.getElementById("password-error");

    if (!pword.match(/[a-z]/)) {
        document.getElementById("errorMessage1").innerHTML = "Enter at least one lowercase letter";
    }

    if (!pword.match(/[A-Z]/)) {
        document.getElementById("errorMessage2").innerHTML = "Enter at least one uppercase letter";
    }
    
    if (!pword.match(/[0-9]/)) {
        document.getElementById("errorMessage3").innerHTML = "Enter at least one number";
    }
    
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        document.getElementById("errorMessage4").innerHTML = "Enter at least one special character";
    }

    if (pword.includes(userid)) {
        document.getElementById("errorMessage5").innerHTML = "Password cannot contain user ID";
    }
}

//Confirming Password
function confirmPassword() {
    pword1 = document.getElementById("password").value;
    pword2 = document.getElementById("confirmpassword").value;

    if (pword1 !== pword2) {
        document.getElementById("confirmpassword-error").innerHTML = 
        "Passwords don't match";
        return false;
    } 
    
    else {
        document.getElementById("confirmpassword-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

// Review button code
  function reviewInput() {
  var formcontent = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
  for (i = 0; i < formcontent.length; i++) {
    if (formcontent.elements[i].value !="") {
        datatype = formcontent.elements[i].type;
        switch (datatype) {
            case "checkbox":
            if (formcontent.elements[i].checked){
                formoutput = 
                formoutput + 
                "<tr><td align='right'>" +
                formcontent.elements[i].name + "</td>";
                formoutput = 
                formoutput + 
                "<td class='outputdata'>&#x2713;</td></tr>";
            }
            break;
        case "radio":
        if  (formcontent.elements[i].checked){
             formoutput = formoutput + "<tr><td align='right'>" +formcontent.elements[i].name + "</td>";
             formoutput = "<td class='outputdata'>" + formcontent.elements[i].value + "/td></tr>";
            }
            break;
        case "button":
        case "submit":
        case "reset":
            break;
        default:
        formoutput = 
        formoutput + 
        "<tr><td align= 'right'>" +
        formcontent.elements[i].name + "</td>";
        formoutput = 
        formoutput + 
        "<td class='outputdata'>" + 
        formcontent.elements[i].value + 
        "/td></tr>";
        }
      }
  }
  if (formoutput.length > 0) {
      formoutput = formoutput + "</table>";
      document.getElementById("showInput").innerHTML = formoutput;
  }
}

// Remove Review Data 
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

// Alert Box 
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

// Validate Everything
function validateEverything() {
    let valid = true;

    if (!validateFirstname()) {
        valid = false;
    }
    if (!validateMiddleinitial()) {
        valid = false;
    }
    if (!validateLastname()) {
        valid = false;
    }
    if (!validateDateofbirth()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddressline()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZipcode()) {
        valid = false;
    }
    if (!validatePhonenumber()) {
        valid = false;
    }
    if (!validateEmailaddress()) {
        valid = false;
    }
    if (!validateUserid()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
}

// Cookies
function setCookie (name, cookieValue, expiryDays) {   
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays*24*60*60*1000));  

    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "="
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt (0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id: "firstname", cookieName: "firstname"},
    {id: "middleinitial", cookieName: "middleinitial"},
    {id: "lastname", cookieName: "lastname"},
    {id: "dateofbirth", cookieName: "dateofbirth"},
    {id: "ssn", cookieName: "ssn"},
    {id: "addressline", cookieName: "addressline"},
    {id: "city", cookieName: "city"},
    {id: "zipcode", cookieName: "zipcode"},
    {id: "phonenumber", cookieName: "phonenumber"},
    {id: "emailaddress", cookieName: "emailaddress"},
    {id: "userid", cookieName: "username"},
]

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

// Welcome message using cookies
var firstname = getCookie("firstname");
if (firstname !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstname + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstname + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

// Remember Me checkbox
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } 
    
    else {
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

//Delete all cookies function
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Tue, 01 Jan 1980 00:00:00 UTC;path=/;";
    });
}

//Event Listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});
