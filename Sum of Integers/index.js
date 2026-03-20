// Sum of digits
// input 1234
// output:10
let number = 1234;
let sum = 0;

while (number > 0) {
  let digit = number % 10;
  sum += digit;
  number = Math.floor(number / 10);
}
console.log(sum);
