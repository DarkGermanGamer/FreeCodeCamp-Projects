const lunches = [];

//Adds an item to the end of an array
function addLunchToEnd(arr, lunch) {
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);

  return arr;
}

//Adds an item to the start of an array
function addLunchToStart(arr, lunch) {
  arr.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);

  return arr;
}

//Removes an item from the end of an array
function removeLastLunch(arr) {
  if(arr.length == 0) {
    console.log(`No lunches to remove.`);
  }
  else {
    const lunch = arr.pop();
    console.log(`${lunch} removed from the end of the lunch menu.`);
  }

  return arr;
}

//Removes an item from the start of an array
function removeFirstLunch(arr) {
  if(arr.length == 0) {
    console.log(`No lunches to remove.`);
  }
  else {
    const lunch = arr.shift();
    console.log(`${lunch} removed from the start of the lunch menu.`);
  }

  return arr;
}

//Returns a random item of an array
function getRandomLunch(arr) {
  if(arr.length == 0) {
    console.log(`No lunches available.`);
  }
  else {
    const random = Math.floor(Math.random() * arr.length - 1) + 1;
    console.log(`Randomly selected lunch: ${arr[random]}`);
  }
}

//Lists the items an array, seperated by comma
function showLunchMenu(arr) {
  if(arr.length == 0) {
    console.log(`The menu is empty.`);
  }
  else {
    console.log(`Menu items: ${arr.join(', ')}`);
  }
}