def parse_inline_code(markdown):
    tick_on = False
    new_string = ''

    for char in markdown:
        if char == '`':
            new_string += f'<{"/" if tick_on else ""}code>'
            tick_on = not tick_on
        else:
            new_string += char
            
    return new_string