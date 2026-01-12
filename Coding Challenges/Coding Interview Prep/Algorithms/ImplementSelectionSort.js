function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let remainingArray = array.slice(i);

    let minNum = Math.min(...remainingArray);
    let minIndex = remainingArray.indexOf(minNum) + i;

    array[minIndex] = array[i];
    array[i] = minNum;
  }

  return array;
}