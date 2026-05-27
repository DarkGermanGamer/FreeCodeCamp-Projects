function updateInventory(inventory, delivery) {
    //If the inventory is empty, return the sorted delivery
    if(inventory.length == 0) {
        return delivery.sort((a,b) => a[1].localeCompare(b[1]));
    }

    for(const deliveredItem of delivery) {
        //Check if the delivered Item already exists in the inventory
        if(!inventory.some(item => item[1] == deliveredItem[1])) {
            inventory.push(deliveredItem);
        }
        else {
            const index = inventory.findIndex(item => item[1] == deliveredItem[1]);
            inventory[index][0] += deliveredItem[0];
        }
    }

    //Sort and return the updated inventory
    return inventory.sort((a,b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))