function findPawnMoves(position) {
  const columns = "ABCDEFGH";
  const oldCoords = [
    columns.indexOf(position.slice(0,1)),
    Number(position.slice(1)) - 1
  ];
  const possibleMoves = oldCoords[1] == 1 ? [[0,1],[0,2]] : [[0,1]];
  let possiblePos = []

  for(let i = 0; i < possibleMoves.length; i++) {
    let move = possibleMoves[i];
    let newPos = [oldCoords[0] + move[0], oldCoords[1] + move[1]];

    if(newPos[0] >= 0 && newPos[0] < 8 && newPos[1] >= 0 && newPos[1] < 8) {
      possiblePos.push(columns[newPos[0]] + (newPos[1] + 1));      
    }
  }
  
  return possiblePos;
}
