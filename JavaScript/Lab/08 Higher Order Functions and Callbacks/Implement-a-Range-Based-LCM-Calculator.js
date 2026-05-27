function smallestCommons(numbers) {
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);

  //Checks if a value is the smallest common of minNumber, maxNumber and all integers in between
  const isSmallestCommon = num => {
    for(let i = minNumber; i <= maxNumber; i++) {
      if(num % i != 0) {
        return false;
      }
    }

    return true;
  }

  let increment = 1;
  let curVal;

  //Multiplies minNumber, maxNumber and the increment until the smallest common is found
  do {
    curVal = minNumber * maxNumber * increment++;
  } while(!isSmallestCommon(curVal))

  return curVal;
}