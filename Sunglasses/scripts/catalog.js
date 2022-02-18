"use strict"
const url1 = "media/gucci1030.jpeg";
const url2 = "media/sosa1.jpeg";
const url3 = "media/sosa2.jpeg";



$(document).ready(function() {
    //displays checkout button
    if (parseInt(localStorage.quantity) > 0) {
        document.getElementById("checkoutButton").style.display = "inline";
    }
    
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
        document.getElementById("checkoutButton").style.display = "inline";
        //stores value amount until changed
        let e = document.getElementById("quantity")
        let amount = e.value;
        localStorage.quantity = amount;
    });

});
