function getFinalOpenedDoors(numDoors) {
  let openDoors = [];

  //Pass each of the [numDoors] doors [numDoors] times
  for(let pass = 1; pass <= numDoors; pass++) {
    for(let doorNr = 1; doorNr <= numDoors; doorNr++) {
      //Interact only with doors if their number is dividable by [pass]
      if(doorNr % pass == 0) {
        if(openDoors.includes(doorNr)) {
          //"Close" doors by removing their number from [openDoors]
          let index = openDoors.indexOf(doorNr);
          openDoors.splice(index, 1);
        }
        else {
          //"Open" doors by adding their number to [openDoors]
          openDoors.push(doorNr);
        }
      }
    }
  }
  
  return openDoors;
}