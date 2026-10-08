let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " was added to your cart!");
}


function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>
                $${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">
                    ✕
                </button>
            </span>
        `;

        cartItems.appendChild(itemElement);
    });

    cartCount.textContent = cart.length;

    cartTotal.textContent = total.toFixed(2);
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


document.getElementById("cartButton").addEventListener("click", function() {

    document.getElementById("cart").style.display = "block";

});


function closeCart() {

    document.getElementById("cart").style.display = "none";

}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert("Checkout would happen here!");

}