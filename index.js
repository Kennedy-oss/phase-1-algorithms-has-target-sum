function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n2) 

/* 
  Add your pseudocode here
*/
// Algorithm: hasTargetSum(array, target)
// Input: An array 'array' of numbers, and an integer 'target'
// Output: A boolean value indicating whether there exists two numbers in the array that sum up to the target

// 1. FOR i from 0 to length of array - 1
//   a. Initialize complement as target - array[i]
//   b. FOR j from i + 1 to length of array - 1
//     i. IF array[j] is equal to complement
//        THEN
//          RETURN true
//        END IF
//     END FOR
//   END FOR
// 2. RETURN false


/*
  Add written explanation of your solution here
*/
// The given JavaScript function, hasTargetSum, is designed to determine if there are two numbers in an array that sum up to a specific target number. It utilizes two nested loops to compare each element in the array with every other element, searching for two numbers that sum up to the target value. If such a pair exists, the function returns true; otherwise, it returns false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
