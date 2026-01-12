function getNumberOfPlants(fieldSize, unit, crop) {
  const unitDict = {
      "acres": 4046.86,
      "hectares": 10000
  };
  const cropDict = {
      "corn": 1,
      "wheat": 0.1,
      "soybeans": 0.5,
      "tomatoes": 0.25,
      "lettuce": 0.2
  };

  let sizeInMeters = fieldSize * unitDict[unit];
  let maxCrops = Math.floor(sizeInMeters / cropDict[crop]);

  return maxCrops;
}