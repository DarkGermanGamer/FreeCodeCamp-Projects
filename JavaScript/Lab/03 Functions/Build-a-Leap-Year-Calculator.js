function isLeapYear(year) {
  const isLY = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);

  return `${year} is${isLY ? '' : ' not'} a leap year.`;
}

let year = 2026;
let result = isLeapYear(year);
console.log(result);