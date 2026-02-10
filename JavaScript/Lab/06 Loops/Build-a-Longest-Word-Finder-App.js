function findLongestWordLength(str) {
  const words = str.split(' ');
  const wordLengths = words.map(item => item.length);

  return Math.max(...wordLengths);
}