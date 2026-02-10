function getsFreeShipping(cart, minimum) {
  const catalogue = {
    "shirt": 34.25,
    "jeans": 48.50,
    "shoes": 75.00,
    "hat": 19.95,
    "socks": 15.00,
    "jacket": 109.95
  };
  let totalPrice = 0;

  for(let i = 0; i < cart.length; i++) {
    let item = cart[i];
    totalPrice += catalogue[item];

    if(totalPrice >= minimum) {
      return true;
    }
  }

  return false;
}