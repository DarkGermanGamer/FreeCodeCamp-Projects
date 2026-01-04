function resolutionStreak(days) {
  const walkGoal = 10000;
  const screenGoal = 120;
  const readGoal = 5;

  let streak = 0;
  let message;

  for(let day = 0; day < days.length; day++) {
    let dayResult = days[day];

    let steps = dayResult[0];
    let screenTime = dayResult[1];
    let pagesRead = dayResult[2];

    if(steps < walkGoal || screenTime > screenGoal || pagesRead < readGoal) {
      break;
    }

    streak++;
  }

  if(streak == days.length) {
    message = "Resolution on track: " + streak + " day streak.";
  }
  else {
    message = "Resolution failed on day " + (streak + 1) + ": " + streak + " day streak.";
  }

  return message;
}