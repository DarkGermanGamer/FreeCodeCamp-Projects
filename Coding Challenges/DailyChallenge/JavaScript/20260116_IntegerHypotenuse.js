function isIntegerHypotenuse(a, b) {
  let aSqr = a*a;
  let bSqr = b*b;
  let c = Math.sqrt(aSqr + bSqr);

  return Number.isInteger(c);
}