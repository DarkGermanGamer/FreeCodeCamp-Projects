function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const compareRange = alphabet.slice(
    alphabet.indexOf(str[0]),
    alphabet.indexOf(str[str.length - 1])
  )

  for(const char of compareRange) {
    if(!str.includes(char)) {
      return char
    }
  }
}