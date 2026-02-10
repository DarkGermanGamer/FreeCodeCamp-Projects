function nthFibonacci(n) {
  let fibonacci = [0, 1];
  let nthNmbr;

  for(let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
  }

  nthNmbr = fibonacci[n-1];

  return nthNmbr;
}