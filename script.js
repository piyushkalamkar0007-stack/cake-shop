let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("total");

    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    } else {
        cartItems.innerHTML = "";

        cart.forEach(function(item, index) {
            const itemDiv = document.createElement("div");

            itemDiv.innerHTML =
                item.name +
                " - ₹" +
                item.price +
                ' <button onclick="removeFromCart(' +
                index +
                ')">Remove</button>';

            cartItems.appendChild(itemDiv);

            totalPrice += item.price;
        });
    }

    total.innerHTML = "Total: ₹" + totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

updateCart();