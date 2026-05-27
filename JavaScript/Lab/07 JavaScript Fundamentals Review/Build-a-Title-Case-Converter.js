function titleCase(str) {
  //Split the sentence into a word array
  const words = str.split(' ');
  const titled = [];

  for(let word of words) {
    //Seperate the first letter of the word from the rest
    const [first, ...rest] = word;
    //Reconstruct the word and push it into a new word array
    titled.push(`${first.toUpperCase()}${rest?.join('').toLowerCase()}`); 
  }

  //Join the new word array into a sentence and return it
  return titled.join(' ');
}