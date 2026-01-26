function getAverageGrade(scores) {
  let totalScore = 0;
  let avgScore;
  const scoreTable = {
    "A+": [97, 100],
    "A" : [93,  96],
    "A-": [90,  92],
    "B+": [87,  89],
    "B" : [83,  86],
    "B-": [80,  82],
    "C+": [77,  79],
    "C" : [73,  76],
    "C-": [70,  72],
    "D+": [67,  69],
    "D" : [63,  66],
    "D-": [60,  62],
    "F" : [0 ,  59]
  };

  for(let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }

  avgScore = Math.floor(totalScore / scores.length);
  
  for(let grade in scoreTable) {
    if(avgScore >= scoreTable[grade][0] && avgScore <= scoreTable[grade][1]) {
      return grade
    }
  }
}