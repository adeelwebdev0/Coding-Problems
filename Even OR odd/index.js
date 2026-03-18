// Even or odd
// input:8
// output:Even or Odd
function check(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}
let ans = check(8);
console.log(ans);
