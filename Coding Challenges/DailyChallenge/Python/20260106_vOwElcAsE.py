import re

def vowel_case(s):
    regExVowel = '[aeiou]'
    regExAlphabet = '[A-Za-z]'

    newString = ''

    for char in s:
        if re.match(regExVowel, char, re.IGNORECASE):
            newString += char.upper()
        elif re.match(regExAlphabet, char, re.IGNORECASE):
            newString += char.lower()
        else:
            newString += char

    return newString