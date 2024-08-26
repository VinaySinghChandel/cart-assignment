const cart1v1 = document.getElementById('cart-1-v1').style;
const cart1v2 = document.getElementById('cart-1-v2').style;
const cart2v1 = document.getElementById('cart-2-v1').style;
const cart2v2 = document.getElementById('cart-2-v2').style;
const cart3v1 = document.getElementById('cart-3-v1').style;
const cart3v2 = document.getElementById('cart-3-v2').style;


function myCart1V1() {
    cart1v1.display = "none";
    cart1v2.display = "flex";
    
    cart2v1.display = "flex";
    cart2v2.display = "none";

    cart3v1.display = "flex";
    cart3v2.display = "none";

    cart1v2.backgroundColor = "#FFF8FA";
    cart1v2.border = "2px solid #FF6B82";

    document.getElementById('cart-1-v2-check').click();
    document.getElementById('cart-1-v1-check').unclick();
    document.getElementById('cart-3-v1-check').unclick();
}

function myCart2V1() {
    cart2v1.display = "none";
    cart2v2.display = "flex";

    cart1v1.display = "flex";
    cart1v2.display = "none";

    cart3v1.display = "flex";
    cart3v2.display = "none";
    
    cart2v2.backgroundColor = "#FFF8FA";
    cart2v2.border = "2px solid #FF6B82";

    document.getElementById('cart-2-v2-check').click();
    document.getElementById('cart-2-v1-check').unclick();
    document.getElementById('cart-3-v1-check').unclick();
}

function myCart3V1() {
    cart3v1.display = "none";
    cart3v2.display = "flex";

    cart1v1.display = "flex";
    cart1v2.display = "none";

    cart2v1.display = "flex";
    cart2v2.display = "none";
    
    cart3v2.backgroundColor = "#FFF8FA";
    cart3v2.border = "2px solid #FF6B82";

    document.getElementById('cart-3-v2-check').click();
    document.getElementById('cart-1-v1-check').unclick();
    document.getElementById('cart-2-v1-check').unclick();
}
