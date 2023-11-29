// Q: Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//    The function should calculate the maximum sum of n consecutive elements in the array.
// example: maxSubarraySum([1,2,5,2,8,1,5],2) // 10

const maxSubarraySum = (intArray, num) => {
    // Find the sum of first num number of elements and store it. (Case: Starting from left)
    let maxSum = 0;
    for (let index = 0; index < num; index++) {
        maxSum += intArray[index];
    }
    // slide the window to right by one element and compare the sum to last,
    // continue till length - num - 1
    for (let index = 0; index < intArray.length - num; index++) {
        // find window sum
        let windowSum = maxSum - intArray[index] + intArray[index + num];
        // if more, change the new max, move to next window
        // if less, do not do anything, move to next window
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
};

const maxSum = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
console.log(maxSum);
