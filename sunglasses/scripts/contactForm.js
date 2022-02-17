"use strict"

//const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    //set values
    const email1 = $("#contactEmail1");
    const email2 = $("#contactEmail2");
    const phone = $("#contactPhone");
    const name = $("#contactName");
    const description = $("#description");
    //radio buttons
    const radioEmail = $("#radioEmail");
    const radioText = $("#radioText");
    const radioCall = $("#radioCall");
    //regex patterns
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    
    //submit form button clicked
    $("#submitButton").click( () => {
    
    let isValid = true;
    if (email1.val() == "" || !emailPattern.test(email1.val())) {
        $("#errorEmail1").text("Please fill out email in required format.");
        isValid = false;
    } else {
        $("#errorEmail1").text("");
    }
    if (email1.val() !== email2.val()) {
        $("#errorEmail2").text("Emails do not match.");
        isValid = false;
    } else {
        $("#errorEmail2").text("");
    }
    if (phone.val() == "" || !phonePattern.test(phone.val())) {
        $("#errorPhone").text("Please enter phone number in desired format.");
    } else {
        $("#errorPhone").text("");
    }
    if (name.val() == "") {
        $("#errorName").text("Please enter your first name.");
    } else {
        $("#errorName").text("");
    }

    //radio buttons
    const radioButtons = document.querySelectorAll("input[name='contactMethod']");
    let prefferedMethod;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            prefferedMethod = radioButton.value;
            break;
        }
    }

    //if everything is true
    if (isValid === true) {
        alert("A customer service representative will reach out to you via " + prefferedMethod + " shortly.")
    }

    });

    $("#clearButton").click( () => {
        email1.val("");
        email2.val("");
        phone.val("");
        name.val("");
        description.val("");
    });
});