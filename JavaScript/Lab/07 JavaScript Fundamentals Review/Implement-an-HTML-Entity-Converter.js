function convertHTML(str) {
  const specialChars = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    '\'': 'apos'
  }

  let newString = '';

  for(const char of str) {
    if(Object.keys(specialChars).includes(char)) {
      newString += `&${specialChars[char]};`;
    }
    else {
      newString += char;
    }
  }

  return newString;
}