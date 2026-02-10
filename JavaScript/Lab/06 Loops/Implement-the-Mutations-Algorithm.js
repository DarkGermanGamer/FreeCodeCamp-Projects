function mutation(arr) {
  const [firstValue, secondValue] = arr;

  for(let char of secondValue.toLowerCase()) {
    if(!firstValue.toLowerCase().includes(char)) {
      return false;
    }
  }

  return true;
}