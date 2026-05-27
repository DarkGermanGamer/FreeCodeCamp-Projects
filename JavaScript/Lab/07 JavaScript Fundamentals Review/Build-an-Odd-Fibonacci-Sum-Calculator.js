function sumFibs(num) {
  const fibonacci = [0,1];
  let sum = fibonacci[1];
  let result = 0;

  for(let index = 1; result <= num; index++) {
    result = fibonacci[index-1] + fibonacci[index];
    fibonacci.push(result);

    if(result % 2 == 1 && result <= num) {
      sum += result;
    }
  } 

  return sum;
}