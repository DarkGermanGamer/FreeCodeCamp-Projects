function frankenSplice(arr1, arr2, index) {
  return arr2.toSpliced(index, 0, ...arr1);
}