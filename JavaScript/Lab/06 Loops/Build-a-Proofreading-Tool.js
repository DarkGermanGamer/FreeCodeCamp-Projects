/**
 * Checks if a word is a palindrome
 */
function isPalindrome(word) {
  const lcWord = word.toLowerCase();
  const splitAtIndex = lcWord.length / 2;

  //Split word in half and reverse the second half
  const fstHalf = lcWord.slice(0, Math.floor(splitAtIndex));
  const sndHalf = lcWord.slice(Math.ceil(splitAtIndex));
  const reversedSndHalf = sndHalf.split("").reverse().join("");

  return fstHalf == reversedSndHalf;
}

/**
 * Finds and returns indices of non-palindromes
 */
function findPalindromeBreaks(words) {
  const palindromeBreaks = [];

  for(let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    
    if(!isPalindrome(currentWord)) {
      palindromeBreaks.push(i);
    }
  }

  return palindromeBreaks;
}

/**
 * Finds and returns indices of repeated phrases
 */
function findRepeatedPhrases(words, phraseLength) {
  const repeatedPhrases = [];
  let phrases = new Map();

  if(phraseLength < words.length) {    
    for(let i = 0; i <= words.length - phraseLength; i++) {
	  //Select the required amount of words out of the array and join them to a phrase
      const phrase = words.slice(i, i + phraseLength).join(" ");

      if(!phrases.has(phrase)) {
        phrases.set(phrase, []);
      }

      phrases.get(phrase).push(i)
    }
  }

  //Push all repeated phrases (>= 2) into repeatedPhrases
  phrases.forEach(value => {
    if(Array.isArray(value) && value.length >= 2) {
      repeatedPhrases.push(...value)
    }
  })

  return repeatedPhrases.sort();
}

/**
 * Analyzes a text for palindrome breaks and repeated phrases
 */
function analyzeTexts(texts, phraseLengths) {
  const results = [];

  if(texts.length > 0) {
    for(const words of texts) {
      results.push({
        repeatedPhrases: findRepeatedPhrases(words, phraseLengths),
        palindromeBreaks: findPalindromeBreaks(words)
      })
    }
  }

  return results;
}