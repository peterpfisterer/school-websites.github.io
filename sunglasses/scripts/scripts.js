"use strict"

const $ = selector => document.querySelector(selector);


const setValues = () => {
    //set values
    const email1 = $("#email1");
    const email2 = $("#email2");
    const name = $("#name");
    let isNameValid = false;
    let isEmailValid = false;
    let emailMatch = false;

    if(name.value != "") {
      document.getElementById("emptyNameBox").style.display = "none";
      isNameValid = true;
    }
    else {
      document.getElementById("emptyNameBox").style.display = "block";
      isNameValid = false;
    }

    if(email1.value != "" && email2.value != "") {
      document.getElementById("emptyEmailBox").style.display = "none";
      isEmailValid = true;
    }
    else {
      document.getElementById("emptyEmailBox").style.display = "block";
      isEmailValid = false;
    }

    if(email1.value == email2.value) {
      document.getElementById("noMatch").style.display = "none";
      emailMatch = true;
    }
    else {
      document.getElementById("noMatch").style.display = "block";
      emailMatch = false;
    }

    if(isNameValid == true && isEmailValid == true && emailMatch == true) {
      document.getElementById("success").style.display = "block";
    }
    else {
      document.getElementById("success").style.display = "none";
    }

}



document.addEventListener("DOMContentLoaded", () => {
    //email list form button clicked
    $("#submit").addEventListener("click", setValues);
    //unmute video
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
});
