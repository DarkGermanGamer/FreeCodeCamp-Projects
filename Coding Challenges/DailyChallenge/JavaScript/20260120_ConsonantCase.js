function toConsonantCase(str) {
  const vowels = /[aeiou]/gi;
  const consonants = /[bcdfghjkklmnopqrstvwxyz]/gi
  
  let newString = '';

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if(char.search(vowels) != -1) {
      newString += char.toLowerCase();
    }
    else if(char.search(consonants) != -1) {
      newString += char.toUpperCase();
    }
    else if(char == '-') {
      newString += '_';
    }
    else {
      newString += char;
    }
  }
  
  return newString;
}