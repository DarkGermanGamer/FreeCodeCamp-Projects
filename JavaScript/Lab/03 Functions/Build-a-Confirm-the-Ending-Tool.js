function confirmEnding(str, check) {
  return str.slice(str.length - check.length) == check;
}