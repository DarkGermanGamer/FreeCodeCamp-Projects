function diffArray(arrA, arrB) {
  //Filter values that are in Array A, but not B
  const differences = arrA.filter(item => !arrB.includes(item));

  //Filter and addvalues that are in Array B, but not A
  differences.push(...arrB.filter(item => !arrA.includes(item)));

  return differences;
}