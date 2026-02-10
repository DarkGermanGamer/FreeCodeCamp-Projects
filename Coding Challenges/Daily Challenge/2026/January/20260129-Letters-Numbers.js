function separateLettersAndNumbers(str) {
  const regEx = /((?<=[a-z])[0-9]|(?<=[0-9])[a-z])/i

  let newString = '';
  let prevChar = '';

  for(let i = 0; i < str.length; i++) {
    let char = str[i];

    if((prevChar + char).match(regEx)) {
      newString += `-${char}`;
    }
    else {
      newString += char;
    }

    prevChar = char;
  }

  return newString;
}