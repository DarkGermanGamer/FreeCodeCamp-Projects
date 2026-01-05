function tireStatus(pressuresPSI, rangeBar) {
  const bar = 14.5038;

  const statusLow = "Low";
  const statusGood = "Good";
  const statusHigh = "High";

  let tireStatus = [];

  for(let i = 0; i < pressuresPSI.length; i++) {
    let tirePressure = pressuresPSI[i];

    let minPressure = rangeBar[0] * bar;
    let maxPressure = rangeBar[1] * bar;

    if(tirePressure < minPressure) {
      tireStatus[i] = statusLow;
    }
    else if(tirePressure > maxPressure) {
      tireStatus[i] = statusHigh;
    }
    else {
      tireStatus[i] = statusGood;
    }
  }

  return tireStatus;
}