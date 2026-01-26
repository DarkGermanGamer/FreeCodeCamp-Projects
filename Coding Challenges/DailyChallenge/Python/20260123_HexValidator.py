import re

def is_valid_hex(s):
    hexRegEx = '^#([0-9a-f]{3}|[0-9a-f]{6})$'

    if re.search(hexRegEx, s, re.IGNORECASE) != None:
        return True
    else:
        return False