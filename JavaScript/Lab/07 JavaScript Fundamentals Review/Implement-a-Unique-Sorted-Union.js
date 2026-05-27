function uniteUnique(...arrays) {
  const uniqueValues = [];

  for(const arr of arrays) {
    for(const val of arr) {
      if(! uniqueValues.includes(val)) {
        uniqueValues.push(val);
      }
    }
  }

  return uniqueValues;
}