//Finds the index for a product name
function findProductIndex(name) {
  return inventory.findIndex(item => item.name.toLowerCase() == name.toLowerCase());
}

//Adds product or increases quantity for existing product
function addProduct(product) {
  const productIndex = findProductIndex(product.name);

  //Product exists
  if(productIndex >= 0) {
    inventory[productIndex].quantity += product.quantity;

    console.log(`${product.name.toLowerCase()} quantity updated`);
  }
  //Product doesn't exist
  else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity
    });

    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
}

//Removes product or decreases quantity for product if new quantity is still more than 0
function removeProduct(product, quantity) {
  const productIndex = findProductIndex(product);

  //Product exists
  if(productIndex >= 0) {
    const remaining = inventory[productIndex].quantity - quantity;

    //Not enough product available
    if(remaining < 0) {
      console.log(`Not enough ${product.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`);
    }
    //Product is now empty
    else if(remaining == 0) {
      inventory.splice(productIndex, 1);

      console.log(`Remaining ${product.toLowerCase()} pieces: ${remaining}`);
    }
    //Still some product left
    else {
      inventory[productIndex].quantity = remaining;

      console.log(`Remaining ${product.toLowerCase()} pieces: ${remaining}`);
    }
  }
  //Product doesn't exist
  else {
    console.log(`${product.toLowerCase()} not found`)
  }
}

const inventory = [];