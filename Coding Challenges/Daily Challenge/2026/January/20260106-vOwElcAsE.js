function vowelCase(str) {
  const regExVowel = /[aeiou]/gi;
  const regExAlphabet = /[A-Za-z]/gi;
  let newString = '';

  for(let i = 0; i < str.length; i++) {
    let char = str[i];

    if(char.match(regExVowel)) {
      char = char.toUpperCase();
    }
    else if(char.match(regExAlphabet)) {
      char = char.toLowerCase();
    }

    newString += char;
  }

  return newString;
}