let count = 0;

function cardCounter(card) {
  if(typeof(card) === 'string' || card === 10) {
    count--;
  }
  else if(card < 7) {
    count++
  }

  return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
}