// Given an array of integers nums, return the largest number in the array.
// Input:nums = [5, 2, 9, 1, 7]
// Output:9
function findLargest(nums) {
  let largestNumber = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largestNumber) {
      largestNumber = nums[i];
    }
  }
  return largestNumber;
}
const result = findLargest([5, 2, 9, 1, 7]);
console.log(result);
