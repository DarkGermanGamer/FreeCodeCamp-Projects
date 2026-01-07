function parseUnorderedList(markdown) {
  let list = markdown.split('\n');
  let htmlString = '<ul>';

  for(let i = 0; i < list.length; i++) {
    let listItem = list[i].slice(1).trim();

    htmlString += `<li>${listItem}</li>`;
  }

  htmlString += '</ul>';

  return htmlString;
}