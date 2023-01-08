// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Find the minimum and maximum sums by taking the sum of the first four elements and the sum of the last four elements
  const minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
  const maxSum = arr.slice(-4).reduce((a, b) => a + b, 0);

  // Print the minimum and maximum sums
  console.log(`${minSum} ${maxSum}`);
}

