function sumPrimes(num) {
  let sum = 0;

  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function isPrime(n) {
  let sqrRoot = Math.sqrt(n)
  
  for(let i = 2; i <= sqrRoot; i++) {
    if(n % i == 0) {
      return false;
    }
  }

  return true;
}