"use strict"


//get and validate info from forms
const shippingPaymentInfo = () => {
    //shipping values
    const fullName = document.getElementById("fullName");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");

    //payment values
    const cardName = document.getElementById("cardName");
    const cardNum = document.getElementById("cardNum");
    const cvv = document.getElementById("cvv");
    const expiration = document.getElementById("expiration");

    //RegEx patterns
    const zipPattern = /^\d{5}$/;
    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const cvvPattern = /^\d{3}$/;
    const expirationPattern = /^[01]?\d\/\d{4}$/;

    //validate shipping info
    let isValid = true;
    if (fullName.value == "" || fullName.value.length > 25) {
        $("#fullName").next().text("*Enter a valid first name.");
        isValid = false;
    } 
    else {
        $("#fullName").next().text("");
    }
    if (address.value == "") {
        $("#address").next().text("*Enter a valid address.");
        isValid = false;
    }
    else {
        $("#address").next().text("");
    }
    if (city.value == "" || city.value > 30) {
        $("#city").next().text("*Enter a valid city.");
        isValid = false;
    }
    else {
        $("#city").next().text("");
    }
    if (state.value == "" || state.value.length > 2){
        $("#state").next().text("*Enter a valid 2 character state ID.");
        isValid = false;
    }
    else {
        $("#state").next().text("");
    }
    if (zip.value == "" || !zipPattern.test(zip.value)) {
        $("#zip").next().text("*Enter a valid zip code.");
        isValid = false;
    }
    else {
        $("#zip").next().text("");
    }

    //validate card info
    if(cardName.value == "" || cardName.value.length > 25) {
        $("#cardNameDiv").text("*Enter a valid card name.");
        isValid = false;
    }
    else {
        $("#cardNameDiv").text("");
    }
    if(cardNum.value == "" || !cardPattern.test(cardNum.value)) {
        $("#cardNumDiv").text("*Enter card number in XXXX-XXXX-XXXX-XXXX format.");
        isValid = false;
    }
    else {
        $("#cardNumDiv").text("");
    }
    if(cvv.value == "" || !cvvPattern.test(cvv.value)) {
        $("#cvvDiv").text("*Enter a valid CVV in XXX format.");
        isValid = false;
    }
    else{
        $("#cvvDiv").text("");
    }
    if (expiration.value == "" || !expirationPattern.test(expiration.value)) {
        $("#expirationDiv").text("*Enter a valid expiration in XX/XXXX format.");
        isValid = false;
    }
    else {
        $("#expirationDiv").text("");
    }

    //order can be placed if validation returns true
    if (isValid == false) {
        //assign information to memory
        const splitName = fullName.value.split(" ");
        const firstName = splitName[0];
        localStorage.fullName = fullName.value;
        localStorage.firstName = firstName;
        localStorage.address = address.value;
        localStorage.city = city.value;
        localStorage.state = state.value;
        localStorage.zip = zip.value;
        //show middle column as reciept of order
        document.getElementById("checkoutRow").style.display = "none";
        document.getElementById("recieptRow").style.display = "inline";
        document.getElementById("goBack").style.display = "none";
        $("#thankYou").text("Thank you for shopping with us " + localStorage.firstName + "!");

        $("#orderInfo").text("You ordered (" + localStorage.quantity + ") SosaGlasses.")

        $("#shippingInfo").text("Delivering to: " + localStorage.fullName + " at " + localStorage.address
         + ", " + localStorage.city + ", " +localStorage.state + " " + localStorage.zip);
        $("#shippingType").text("You selected " + localStorage.shipping + " shipping so your package will arrive on " + localStorage.deliveryDate);
        //remove old information from memory


    }

};


$(document).ready(function() {
    //set date values
    const today = new Date();
    const arrivalDate = new Date();
    if(localStorage.shipping == "expedited") {
        arrivalDate.setDate(today.getDate() + 5);
    }
    else {
        arrivalDate.setDate(today.getDate() + 10);
    }
    localStorage.deliveryDate = arrivalDate.toDateString();


    //set final price values
    $("#summary").text("Sosa Glasses x" + localStorage.quantity);
    $("#shipType").text("Shipping type: " + localStorage.shipping);
    $("#total").text("Final total: $" + localStorage.finalTotal);
    
    $("#placeOrder").click( () => {shippingPaymentInfo()});
});