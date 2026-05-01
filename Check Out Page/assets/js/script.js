function placeOrder() {
    if (document.getElementById('checkoutForm').checkValidity()) {
        alert("Order placed successfully!");
        location.reload();
    } else {
        alert("Please fill in all fields correctly.");
    }
}