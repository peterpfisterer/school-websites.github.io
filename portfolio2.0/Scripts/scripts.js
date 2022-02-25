"use strict"

function form_submit() {
    $("#name").val("");
    $("#email1").val("");
    $("#email2").val("");
    $("#phone").val("");
    $("#email1").val("");
    alert("test")
}

function sendEmail(email) {
    
}

document.addEventListener("DOMContentLoaded", () => {
    
    //contact form variables
    const name = $("#name");
    const email1 = $("#email1");
    const email2 = $("#email2");
    const phone = $("#phone");
    const description = $("#description");

    //regex patterns
    const namePattern = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/;
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const descriptionPattern = /^[\.a-zA-Z0-9,!? ]*$/;

    //contact form submit button event handler
    $("#submit_form").click( () => {

        let isValid = true;

        if (name.val() == "" || !namePattern.test(name.val())){
            $("#name_error").text("^ Please enter a valid first name. ^");
            isValid = false;
        } else {
            $("#name_error").text("");
        }

        if (email1.val() == "" || !emailPattern.test(email1.val())) {
            $("#email1_error").text("^ Please enter email in requested format. ^");
            isValid = false;
        } else {
            $("#email1_error").text("");
        }

        if (email2.val() != email1.val()) {
            $("#email2_error").text("Emails have to match.");
            isValid = false;
        } else {
            $("#email2_error").text("");
        }

        if (phone.val() == "" || !phonePattern.test(phone.val())) {
            $("#phone_error").text("^ Please enter phone number in requested format. ^");
            isValid = false;
        } else {
            $("#phone_error").text("");
        }

        if (description.val() == "" || !descriptionPattern.test(description.val())) {
            $("#description_error").text("^ Enter description with only letters, numbers, and punctuation. ^");
            isValid = false;
        } else {
            $("#description_error").text("");
        }

        if (isValid === true) {
            form_submit();
        }
    });
});