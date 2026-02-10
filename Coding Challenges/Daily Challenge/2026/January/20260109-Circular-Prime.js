function isCircularPrime(n) {
  let numbers = Array.from(n.toString(), Number);

  for(let i = 0; i < numbers.length; i++) {
    let number = Number(numbers.join(''));

    if(!isPrime(number)) {
      return false
    }
	
    rotateArray(numbers)
  }

  return true;
}

function rotateArray(list) {
  list.push(list[0]);
  list.shift()

  return list
}

function isPrime(n) {
  let sqrRoot = Math.sqrt(n)
  
  for(let i = 2; i < sqrRoot; i++) {
    if(n % i == 0) {
      return false;
    }
  }

  return true;
}