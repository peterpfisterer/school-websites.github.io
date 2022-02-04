"use strict"

const $ = selector => document.querySelector(selector);



//Checks validity of information entered
const contactInfo = () => {
    //set values
    const email1 = $("#contactEmail1");
    const email2 = $("#contactEmail2");
    const phone = $("#contactPhone");
    const name = $("#contactName");
    const description = $("description");
    //booleans
    let contactEmailValid = false;
    let contactEmailMatch = false;
    let contactPhoneValid = false;
    let contactNameValid = false;
    
    //error messages
    let blank = "This is a required field."
    let emailMatch = "Email addresses must match.";
    let phoneInvalid = "Phone number has to be a number.";
    //logic
    if(email1.value != "") {
      contactEmailValid = true;
      email1.nextElementSibling.textContent = "*";
    }
    else {
        contactEmailValid = false;
        email1.nextElementSibling.textContent = blank;
    }

    if(email1.value == email2.value) {
        contactEmailMatch = true;
        email2.nextElementSibling.textContent = "*";
    }
    else {
        contactEmailMatch = false;
        email2.nextElementSibling.textContent = emailMatch;
    }

    if(phone.value != "" && !isNaN(phone.value)) {
        contactPhoneValid = true;
        phone.nextElementSibling.textContent = "*";
    }
    else {
        contactPhoneValid = false;
        phone.nextElementSibling.textContent = phoneInvalid;
    }

    if(name.value != "") {
        contactNameValid = true;
        name.nextElementSibling.textContent = "*";
    }
    else {
        contactNameValid = false;
        name.nextElementSibling.textContent = blank;
    }


    if(contactEmailValid == true && contactEmailMatch == true && contactPhoneValid == true && contactNameValid == true) {
        var ele = document.getElementsByName("contactMethod");
        let contactMethod = "";
            for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                contactMethod = ele[i].value;
            }

        alert(`Form submitted. A customer service representative will be reaching out to you via ` + contactMethod + ` shortly.`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //submit form button clicked
    $("#submitButton").addEventListener("click", contactInfo);
});