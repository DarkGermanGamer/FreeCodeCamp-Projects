function binarySearch(searchList, value) {
  let arrayPath = [];

  let low = 0;
  let high = searchList.length - 1

  while(low <= high) {
    let middle = Math.floor((low + high) / 2);
    let middleVal = searchList[middle];

    arrayPath.push(middleVal)

    if(middleVal == value) {
      return arrayPath
    }
    else if(value > middleVal) {
      low = middle + 1;
    }
    else {
      high = middle - 1;
    }
  } 

  return 'Value Not Found';
}