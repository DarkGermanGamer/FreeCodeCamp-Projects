function chunkArrayInGroups(arr, num) {
  let newArr = [];
  let tempArr = [];

  for(const value of arr) {
    if(tempArr.length < num) {
      tempArr.push(value);
    }
    else {
      newArr.push(tempArr);

      tempArr = [];
      tempArr.push(value);
    }
  }

  newArr.push(tempArr);
  return newArr;
}