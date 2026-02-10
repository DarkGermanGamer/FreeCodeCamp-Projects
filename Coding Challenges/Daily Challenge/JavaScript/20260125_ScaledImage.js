function scaleImage(size, scale) {
  let width = size.split('x')[0];
  let height = size.split('x')[1];

  width *= scale;
  height *= scale;

  return `${width}x${height}`;
}