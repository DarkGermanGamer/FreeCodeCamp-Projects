function findLeftHandedSeats(table) {
  const righthanded = "R";
  const unoccupied = "U";

  let possibleSeatCount = 0;

  for(let rowCount = 0; rowCount < table.length; rowCount++) {
    let row = table[rowCount];

    for(let seatCount = 0; seatCount < row.length; seatCount++) {
      let seat = row[seatCount];
      let leftSeat = rowCount % 2 ? row[seatCount - 1] : row[seatCount + 1];

      if(seat == unoccupied && leftSeat != righthanded) {
        possibleSeatCount++;
      }
    }
  }

  return possibleSeatCount;
}