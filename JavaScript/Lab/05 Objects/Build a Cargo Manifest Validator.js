function normalizeUnits(manifest) {
  let newManifest = {...manifest};

  if(newManifest.unit == "lb") {
      newManifest.weight = newManifest.weight * 0.45;
      newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  let newManifest = {...manifest};
  let result = {};

  //check containerID
  if(!newManifest.hasOwnProperty("containerId") ) {
    result.containerId = "Missing";
  }
  else if(!(Number.isInteger(newManifest.containerId) && newManifest.containerId > 0)) {
    result.containerId = "Invalid";
  }

  //check destination
  if(!newManifest.hasOwnProperty("destination") ) {
    result.destination = "Missing";
  }
  else if(!(typeof(newManifest.destination) == "string" && newManifest.destination.trim().length > 0)) {
    result.destination = "Invalid";
  }

  //check weight
  if(!newManifest.hasOwnProperty("weight") ) {
    result.weight = "Missing";
  }
  else if(!(Number.isInteger(newManifest.weight) && newManifest.weight > 0)) {
    result.weight = "Invalid";
  }

  //check unit
  if(!newManifest.hasOwnProperty("unit") ) {
    result.unit = "Missing";
  }
  else if(!(typeof(newManifest.unit) == "string" 
  && (newManifest.unit == "kg" || newManifest.unit == "lb"))) {
    result.unit = "Invalid";
  }

  //check hazmat
  if(!newManifest.hasOwnProperty("hazmat") ) {
    result.hazmat = "Missing";
  }
  else if(typeof(newManifest.hazmat) != "boolean") {
    result.hazmat = "Invalid";
  }

  return result;
}

function processManifest(manifest) {
  let validationResult = validateManifest(manifest);

  if(Object.keys(validationResult).length === 0) {
    let normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${normalized.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  }
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}
