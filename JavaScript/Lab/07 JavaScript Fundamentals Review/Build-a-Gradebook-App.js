//Returns the average score
function getAverage(scores) {
  let sum = 0;

  if(scores.length == 0) {
    return 0;
  }

  for(const val of scores) {
    sum += val;
  }

  return sum / scores.length;
}

//Translates a score into the respective grade
function getGrade(score) {
  if(score == 100) {
    return 'A+';
  }
  else if(score >= 90) {
    return 'A';
  }
  else if(score >= 80) {
    return 'B';
  }
  else if(score >= 70) {
    return 'C';
  }
  else if(score >= 60) {
    return 'D';
  }
  else {
    return 'F';
  }
}

//Checks if the score results in a passing grade
function hasPassingGrade(score) {
  const grade = getGrade(score);

  return grade != 'F';
}

//Returns a massage determined by class average and personal result
function studentMsg(classScores, yourScore) {
  const average = getAverage(classScores);
  const yourGrade = getGrade(yourScore);
  const hasPassed = hasPassingGrade(yourScore);

  const msg = `Class average: ${average}. Your grade: ${yourGrade}. You ${hasPassed ? 'passed' : 'failed'} the course.`;

  return msg;
}