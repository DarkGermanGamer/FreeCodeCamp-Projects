function isBalanced(s) {
  const regEx = /[aeiou]/gi;
  let fstHalf, secHalf;
  let vowelsInFstHalf, vowelsInSecHalf = [];
  let isBalanced;

  fstHalf = s.substring(0, Math.floor(s.length / 2));
  secHalf = s.substring(Math.ceil(s.length / 2));

  vowelsInFstHalf = Array.from(fstHalf.matchAll(regEx));
  vowelsInSecHalf = Array.from(secHalf.matchAll(regEx));
  
  isBalanced = vowelsInFstHalf.length == vowelsInSecHalf.length;

  return isBalanced;
}