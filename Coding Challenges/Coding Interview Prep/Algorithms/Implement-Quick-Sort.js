function quickSort(array) {
  if(array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let lessThanPivot = [];
  let equalPivot = [];
  let greaterThanPivot = [];

  for(let i = 0 ; i < array.length; i++) {
    if(array[i] < pivot) {
      lessThanPivot.push(array[i]);
    }
    else if(array[i] === pivot) {
      equalPivot.push(array[i]);
    }
    else if(array[i] > pivot) {
      greaterThanPivot.push(array[i]);
    }
  }

  if(lessThanPivot.length === 0 && greaterThanPivot.length === 0) {
    return equalPivot;
  }

  return [
    ...quickSort(lessThanPivot), 
    ...quickSort(equalPivot), 
    ...quickSort(greaterThanPivot)
  ];
}