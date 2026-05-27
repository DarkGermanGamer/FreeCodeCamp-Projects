function pairElement(str) {
  const dnaPairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  const pairs = [];

  for(const char of str) {
    pairs.push([char, dnaPairs[char]]);
  }

  return pairs;
}