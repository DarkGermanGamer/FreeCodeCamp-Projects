function arraySwap(arr) {

  arr.push(arr[0]);
  arr.shift();

  return arr;
}