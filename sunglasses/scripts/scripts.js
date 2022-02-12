"use strict"

const $ = selector => document.querySelector(selector);

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
});
