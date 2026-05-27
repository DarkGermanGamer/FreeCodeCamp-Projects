function whatIsInAName(objects, source) {
  let filtered = objects;

  for(const prop in source) {
    filtered = filtered.filter(item => item[prop] === source[prop]);
  }

  return filtered;
}