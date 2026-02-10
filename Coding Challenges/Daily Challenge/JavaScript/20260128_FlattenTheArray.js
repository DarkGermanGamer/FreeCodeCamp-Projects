function flatten(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    let item = arr[i]
    
    if(typeof item == 'object') {
      newArray.push(...flatten(item));
    }
    else {
      newArray.push(item);
    }
  }
  
  return newArray;
}