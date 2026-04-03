// ------------------------PalindromeNumber------------------------
// input:121
// output:121 ?true:not true
let n = 121;
let orignal = n;
let reversed = 0;
while (n > 0) {
  reversed = reversed * 10 + (n % 10);
  n = Math.floor(n / 10);
}

if (reversed === orignal) {
  console.log("true");
} else {
  console.log("Not true");
}
