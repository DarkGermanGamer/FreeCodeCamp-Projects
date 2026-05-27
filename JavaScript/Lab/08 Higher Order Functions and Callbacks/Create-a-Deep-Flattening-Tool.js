function steamrollArray(nestedArr) {
  const containsNested = nestedArr.some(item => Array.isArray(item));

  //Check if the array is nested
  if(containsNested) {
    let newArr = [];

    for(let item of nestedArr) {
      //Check if the item is an array
      if(Array.isArray(item)) {
        //Recursively flatten the array
        newArr.push(...steamrollArray(item))
      }
      else {
        newArr.push(item)
      }
    }
    
    return newArr
  }
  //If it isn't nested, return original array
  else {
    return nestedArr;
  }
}