function reverseInteger(num) {
  let reversed = 0;
  let n = Math.abs(num);

  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return num < 0 ? -reversed : reversed;
}

console.log(reverseInteger(1234));
console.log(reverseInteger(-567));
