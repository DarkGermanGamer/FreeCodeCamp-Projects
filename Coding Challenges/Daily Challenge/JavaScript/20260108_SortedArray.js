function isSorted(arr) {
  let ascend = 'Ascending';
  let descend = 'Descending';
  let notSorted = 'Not sorted';

  let direction;

  let prevNumber = arr[0];

  for(let i = 1; i < arr.length; i++) {    
    let number = arr[i];

    //If direction hasn't been determined (first loop), determine it
    if(!direction){
      direction = prevNumber <= number ? ascend : descend;
    }
    //If the current number doesn't follow the determined direction, set direction to "Not sorted" and terminate loop
    else if(
		(direction == ascend && prevNumber > number) 
		|| (direction == descend && prevNumber < number)
	) {
      direction = notSorted;
      break;
    }

    prevNumber = number;
  }

  return direction;
}