const names = [
  "Hole-in-one!", 
  "Eagle", 
  "Birdie", 
  "Par", 
  "Bogey", 
  "Double Bogey", 
  "Go Home!"
];

function golfScore(par, strokes) {
  if(strokes == 1) {
    return names[0];
  }
  
  for(let i = -2; i <= 3; i++) {
    if(strokes <= par + i) {
      return names[3+i];
    }
  }

  //Edge case, if strokes > par + 3
  return names[6];
}