"use strict"

//RegEx patterns
const namePattern = /^[a-z,.'-]+$/i;
const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

//tests values from contact form.
function processContactInfo(firstName, email1, email2) {
    let isValid = true;

    if (firstName == "" || !namePattern.test(firstName)) {
        isValid = false;
        $("#name-error").text("Enter a valid name.");
    } else {
        $("#name-error").text("");
    }

    if (email1 == "" || !emailPattern.test(email1)) {
        isValid = false;
        $("#email1-error").text("Enter a valid email.");
    } else {
        $("#email1-error").text("");
    }

    if (email2 !== email1) {
        isValid = false;
        $("#email2-error").text("Emails do not match.");
    } else {
        $("#email2-error").text("");
    }

    return isValid;
}




document.addEventListener("DOMContentLoaded", () => {

    //fixes navbar to top once navbar is scrolled to
    $(window).scroll(function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 320) {
            $("#site-nav").addClass("fixed-top");
        }

        if($(window).scrollTop() < 321) {
            $("#site-nav").removeClass("fixed-top");
        }
    });


    //event handler for submit button
    $("#submit-button").click( () => {
        let firstName = $("#name").val();
        let email1 = $("#email1").val();
        let email2 = $("#email2").val();

        let isValid = processContactInfo(firstName, email1, email2);

        if (isValid === true) {
            alert("Thanks for filling out my form. This form will not send out anything so do not expext a message back.");
            $("#name").val("");
            $("#email1").val("");
            $("#email2").val("");
        }
    });

});