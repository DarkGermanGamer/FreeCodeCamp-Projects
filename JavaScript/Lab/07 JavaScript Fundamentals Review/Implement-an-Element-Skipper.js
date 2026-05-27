function dropElements(arr, func) {
  const index = arr.findIndex(item => func(item));

  if(index >= 0) {
    return arr.slice(index)
  }
  else {
    return [];
  }
}