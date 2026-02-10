function getBingoLetter(n) {
  const bingoTable = {
    "B": [1,15],
    "I": [16,30],
    "N": [31,45],
    "G": [46,60],
    "O": [61,75]
  };

  for(let letter in bingoTable) {
    if(n >= bingoTable[letter][0] && n <= bingoTable[letter][1]) {
      return letter
    }
  }
}