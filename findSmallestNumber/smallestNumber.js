// Given an array of integers nums, return the smallest number in the array.
// input:nums = [5, 2, 9, 1, 7]
// output: 1
function findSmallest(nums) {
  let smallestNumber = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallestNumber) {
      smallestNumber = nums[i];
    }
  }
  return smallestNumber;
}
let result = findSmallest([5, 2, 9, 1, 7]);

console.log(result);
