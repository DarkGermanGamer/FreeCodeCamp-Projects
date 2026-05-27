function pyramid(displayChar, rowsToDraw, inverted) {
  let pyramid = '\n';

  const drawLine = n => {
    const spaceCount = rowsToDraw - (1 + n)
    const charCount = 1 + 2*n;

    return `${' '.repeat(spaceCount)}${displayChar.repeat(charCount)}\n`
  }
  
  for(let i = 0; i < rowsToDraw; i++) {
    pyramid += drawLine(inverted ? rowsToDraw - (1 + i) : i);
  }

  return pyramid
}