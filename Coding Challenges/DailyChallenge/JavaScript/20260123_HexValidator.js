function isValidHex(str) {
  const hexRegEx = /^#([0-9a-f]{3}|[0-9a-f]{6})$/gi;

  if(str.match(hexRegEx) != null) {
    return true;
  }
  else {
    return false;
  }
}