function compareEnergy(caloriesBurned, wattHoursUsed) {
  const joulesPerCalorie = 4184;
  const joulesPerWh = 3600;

  const workoutEnergy = caloriesBurned * joulesPerCalorie;
  const deviceEnergy = wattHoursUsed * joulesPerWh;

  if(workoutEnergy > deviceEnergy) {
    return "Workout";
  }
  else if(workoutEnergy < deviceEnergy) {
    return "Devices";
  }
  else {
    return "Equal";
  }
}