import re

def separate_letters_and_numbers(s):
    reg_ex = '((?<=[a-z])[0-9]|(?<=[0-9])[a-z])'

    new_string = ''
    prev_char = ''

    for char in s:
        if re.search(reg_ex, prev_char + char, re.IGNORECASE) :
            new_string += f'-{char}'
        else:
            new_string += char
        
        prev_char = char

    return new_string