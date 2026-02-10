function parseLink(markdown) {
  /*Select all characters between (but not including) brackets
  (?<=\[) positive lookbehind (?<=x) searches result that follows regExp x
  (?=\])	positive lookahead (?=x) searches result that precedes regExp x
  */
  const displayString = markdown.match(/(?<=\[).*(?=\])/)[0];

  //Select all characters between (but not including) parenthesis
  const urlString = markdown.match(/(?<=\().*(?=\))/)[0];
  
  const htmlLink = `<a href="${urlString}">${displayString}</a>`

  return htmlLink;
}