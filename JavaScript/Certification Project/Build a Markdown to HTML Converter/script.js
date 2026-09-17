let markdownField = document.getElementById('markdown-input');
let outputField = document.getElementById('html-output');
let previewField = document.getElementById('preview');

markdownField.addEventListener('input', () => convertMarkdown());

/**
 * Rules for the Markdown replacement
 * - pattern: RegEx-pattern to replace
 * - tag: Structure of the HTML tag
 * - hasClosing: Boolean that specifies if there is an identical closing pattern
 */
const replRegExps = [
  {pattern: '^\\s*# ', tag: '<h1>$1</h1>', hasClosing: false},
  {pattern: '^\\s*## ', tag: '<h2>$1</h2>', hasClosing: false},
  {pattern: '^\\s*### ', tag: '<h3>$1</h3>', hasClosing: false},
  {pattern: '(?:\\*{2}|_{2})', tag: '<strong>$1</strong>', hasClosing: true},
  {pattern: '(?:\\*{1}|_{1})', tag: '<em>$1</em>', hasClosing: true},
  {pattern: '!\\[(.*)\\]\\((.*)\\)', tag: '<img alt="$1" src="$2">', hasClosing: false},
  {pattern: '\\[(.*)\\]\\((.*)\\)', tag: '<a href="$2">$1</a>', hasClosing: false},
  {pattern: '^\\s*> ', tag: '<blockquote>$1</blockquote>', hasClosing: false},
];

/**
 * Converts markdown text into HTML
 */
function convertMarkdown() {
  const rawInput = markdownField.value;
  const lines = rawInput.split('\n')
  let converted = [];

  //Converts the input line by line
  for(let line of lines) {
      //Applies all replacement rules one by one
      for(let rule of replRegExps) {
        const pattern = `${rule.pattern}(.*)${rule.hasClosing?rule.pattern:''}`

        if(new RegExp(pattern).test(line)) {
          line = line.replace(new RegExp(pattern), rule.tag)
        }
      }

    converted.push(line);
  }

  outputField.innerText = converted.join('\n');
  previewField.innerHTML = converted.join('\n');

  return converted.join('\n');
}