function destroyer(arr, ...exclusion) {
  const newArr = arr.filter(item => ! exclusion.includes(item));

  return newArr;
}