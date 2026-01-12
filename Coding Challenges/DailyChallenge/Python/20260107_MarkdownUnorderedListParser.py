def parse_unordered_list(markdown):
    markdown_list = [i[1:].strip() for i in markdown.split('\n')];
    html_string = '<ul>'

    for list_item in markdown_list:
        html_string += f'<li>{list_item}</li>'
    else:
        html_string += '</ul>'

    return html_string