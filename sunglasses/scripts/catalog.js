"use strict"
const url1 = "media/gucci1030.jpeg";
const url2 = "media/sosa1.jpeg";
const url3 = "media/sosa2.jpeg";

$(document).ready(function() {
    //hover over pictures changes big picture
   $("#glasses_picture").hover( () => {
        $("#big_image").attr("src", url1);
   });
   $("#sosa_picture1").hover( () => {
    $("#big_image").attr("src", url2);
    });
    $("#sosa_picture2").hover( () => {
        $("#big_image").attr("src", url3);
   });
   $("#glasses_picture2").hover( () => {
    $("#big_image").attr("src", url1);
    });
    $("#sosa_picture3").hover( () => {
    $("#big_image").attr("src", url2);
    });

    //add to cart click event
    $("#add_to_cart").click( () => {
        alert(`Thank you for using my website. Unfortunately, this option is not yet available. This is still a fake product as of now.`)
    });

});
