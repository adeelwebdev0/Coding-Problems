// Find bigger number
// ----INPUT-----
// A = 5
// B = 9
// OUTPUT-----9----
function findBigger(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Equal";
  }
}

findBigger(5, 9);

// console.log(findBigger(5, 9));// b
