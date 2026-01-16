import re

def parse_link(markdown):
    #Select all characters between (but not including) brackets
    #(?<=\[) positive lookbehind (?<=x) searches result that follows regExp x
    #(?=\])	positive lookahead (?=x) searches result that precedes regExp x
    disp_string = re.findall("(?<=\[).*(?=\])", markdown)[0]
    
    #Select all characters between (but not including) parenthesis
    url_string = re.findall("(?<=\().*(?=\))", markdown)[0]
    
    html_link = f'<a href="{url_string}">{disp_string}</a>'

    return html_link