function largestOfAll(arrays) {
  const largestNumbers = [];

  for(const arr of arrays) {
    largestNumbers.push(Math.max(...arr));
  }

  return largestNumbers;
}