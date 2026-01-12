function golfScore(par, strokes) {
  switch(strokes) {
    case 1: return "Hole in one!";
    case par - 2: return "Eagle";
    case par - 1: return "Birdie";
    case par: return "Par";
    case par + 1: return "Bogey";
    case par + 2: return "Double bogey";
  }
  
  return strokes;
}