function ticTacToe(board) {
  for(let index = 0; index < board.length; index++) {
    let row = board[index];
    let col = [board[0][index],board[1][index],board[2][index]];

    if(row.every(isSameSymbol)) {
      return `${row[0]} wins`;
    };
    
    if(col.every(isSameSymbol)) {
      return `${board[0][index]} wins`;
    };
  };

  if([board[0][0], board[1][1], board[2][2]].every(isSameSymbol)
  || [board[0][2], board[1][1], board[2][0]].every(isSameSymbol)
  ) {
    return `${board[1][1]} wins`;
  }

  return 'Draw';
}

function isSameSymbol(item, index, arr) {
  if(index == 0) {  
    return true;
  } 
  else {
    return item == arr[index - 1];
  } 
}