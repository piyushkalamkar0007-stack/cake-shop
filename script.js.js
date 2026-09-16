let cart = [];
let total = 0;

function addToCart(name, price) {

```
cart.push({
    name: name,
    price: price
});

total = total + price;

displayCart();

alert(name + " added to your cart!");
```

}

function displayCart() {

```
let cartText = "";

for (let i = 0; i < cart.length; i++) {

    cartText +=
        cart[i].name +
        " - ₹" +
        cart[i].price +
        "<br>";
}

document.getElementById("cartItems").innerHTML =
    cartText;

document.getElementById("total").innerHTML =
    "Total: ₹" + total;
```

}

function showMessage() {

```
document.getElementById("cakes").scrollIntoView({
    behavior: "smooth"
});
```

}
