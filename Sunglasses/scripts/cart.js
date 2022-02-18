"use strict"

const price= 120;
const taxRate = .06;

const getTotal = (quantity, price, taxRate) => {
    
    let total = (quantity * price) + (quantity * price * taxRate);
    return total.toFixed(2);
};

$(document).ready(function() {
    
    if (localStorage.quantity == undefined) {
        document.getElementById("cart-item").style.display = "none";
        document.getElementById("emptyCartButton").style.display = "inline";
        document.getElementById("priceColumn").style.display = "none";
    }
    
    //calculations
    let total = getTotal(localStorage.quantity, price, taxRate)
   $("#subtotal").text("$" + (localStorage.quantity * price).toFixed(2));
   $("#taxes").text("$" + ((localStorage.quantity * price) * taxRate).toFixed(2));
   $("#total").text("$" + total);
    
   
   $("#cartAmount").text("x" +localStorage.quantity);

    $("#deleteButton").click( () => {
        //clear quantity from local storage
        localStorage.removeItem("quantity");
        //hide cart item
        document.getElementById("cart-item").style.display = "none";
        document.getElementById("emptyCartButton").style.display = "inline";
        document.getElementById("priceColumn").style.display = "none";
    });

    var termsCheck = document.querySelector("#agree");
    var shipping = document.querySelector("#shipping");
    const text = shipping.options[shipping.selectedIndex].value;

    $("#goToPayment").click( () => {
        if (termsCheck.checked == false) {
        alert("Please read terms and conditions and check the box.");
        }
        else {
            if(shipping.value == "expedited") {
                localStorage.finalTotal = parseInt(total) + 8.99;
                localStorage.shipping = "expedited";
                window.open("payment.html");
            }
            else {
                localStorage.finalTotal = total;
                localStorage.shipping = "standard";
                window.open("payment.html");
                
            }
        }
    });


});

