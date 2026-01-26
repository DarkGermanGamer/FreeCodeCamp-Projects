import re

def to_consonant_case(s):
    vowels = '[aeiou]'
    consonants = '[bcdfghjkklmnopqrstvwxyz]'

    new_string = ''

    for char in s:
        if re.search(vowels, char, re.IGNORECASE):
            new_string += char.lower()
        elif re.search(consonants, char, re.IGNORECASE):
            new_string += char.upper()
        elif char == '-':
            new_string += '_'
        else:
            new_string += char

    return new_string