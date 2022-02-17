"use strict"

const $ = selector => document.querySelector(selector);

//for newsletter
function verifyData () {
  const email1 = $("#email1");
  const email2 = $("#email2");
  const name = $("#name");

  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
  
  let isValid = true;
  if (email1.value == "" || !emailPattern.test(email1.value)) {
    document.getElementById("email1_error").innerHTML = "Enter a valid email address. <br>";
    isValid = false;
  } else {
    document.getElementById("email1_error").innerHTML = "";
  }
  if (email2.value !== email1.value) {
    document.getElementById("email2_error").innerHTML = "Email addresses must match. <br>";
    isValid = false
  } else {
    document.getElementById("email2_error").innerHTML = "";
  }
  if (name.value == "") {
    document.getElementById("name_error").innerHTML = "Enter a valid first name. <br>";
    isValid = false;
  } else {
    document.getElementById("name_error").innerHTML = "";
  }
  
  if (isValid === true) {
    email1.value = "";
    email2.value = "";
    name.value = "";
    return isValid;
  }
}


document.addEventListener("DOMContentLoaded", () => {

    //unmute video
    $("#scrollButton").addEventListener("click", () => {
      var video = document.getElementById("loveSosa");
      video.muted = true;
      document.getElementById("soundButton").style.display = "inline";
      document.getElementById("muteButton").style.display = "none";
    });
    $("#soundButton").addEventListener("click", () => {
      //unmutes video
      var video = document.getElementById("loveSosa");
      video.muted = false;
      //change buttons
      document.getElementById("soundButton").style.display = "none";
      document.getElementById("muteButton").style.display = "inline";
    });
    //mute video
    $("#muteButton").addEventListener("click", () => {
      //mutes video
      var video = document.getElementById("loveSosa");
      video.muted = true;
      //change buttons
      document.getElementById("soundButton").style.display = "inline";
      document.getElementById("muteButton").style.display = "none";
    });
    
    //submit newsletter
    $("#join_list").addEventListener("click", () => {
      if (verifyData() == true) {
        alert("Thank you for Joining our Email List!");

      }
      event.preventDefault();
    });
});
