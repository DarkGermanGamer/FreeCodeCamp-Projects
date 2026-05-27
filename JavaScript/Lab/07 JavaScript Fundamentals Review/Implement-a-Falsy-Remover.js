function bouncer(arr) {
  const truthyValues = [];

  for(const check of arr) {
    if(check) {
      truthyValues.push(check);
    }
  }

  return truthyValues;
}