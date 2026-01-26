function parseInlineCode(markdown) {
  let tickOn = false;
  let newString = '';

  for(let i = 0; i < markdown.length; i++) {
    let char = markdown[i];

    if(char == '`') {
      newString += `<${tickOn ? '/' : ''}code>`;
      tickOn = !tickOn;
    }
    else {
      newString += char;
    }
  }

  return newString;
}