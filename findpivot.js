// Find Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

 

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// input for findPivot function
const nums = [1,7,3,6,5,6]

// findPivot function
const findPivot = nums => {

    // variables to hold right and left side values
    let rightSum = 0;
    let leftSum = 0;

    // go through the array and add every value in the array and set it to the rightSum variable
    nums.forEach((v) => rightSum += v);

    // loop through the nums array
    for (let i = 0; i < nums.length; i++) {

        // set curr variable to the current index value
        const curr = nums[i];
        
        // substract the current index value from the rightSum
        rightSum -= curr

        // if the leftSum if equal to the rightSum variable then return and console log that index value
        if(leftSum === rightSum) return console.log(i);

        // if doesnt equal then add the current index value to the leftSum variable using string arithmatic
        leftSum += curr
    }

    // return and console log -1 if we dont find a match in the for loop
    return console.log(-1);
}

// call findPivot function with nums array as the argument
findPivot(nums)