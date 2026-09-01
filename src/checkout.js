// Checkout flow module.
function checkout(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

module.exports = { checkout };
