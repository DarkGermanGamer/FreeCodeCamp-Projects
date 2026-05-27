function findElement(arr, func) {
  return arr.find(item => func(item));
}