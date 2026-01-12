function bubbleSort(array) {
  let hasSwapOccured = false;

  do {
    for(let i = 1; i < array.length; i++) {
      let num1 = array[i-1];
      let num2 = array[i];

      if(num1 > num2) {
        array[i-1] = num2;
        array[i] = num1;
        
        hasSwapOccured = true;
      }
    }
  } while(hasSwapOccured);

  return array;
}