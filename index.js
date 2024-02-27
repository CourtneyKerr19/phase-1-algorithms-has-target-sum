function hasTargetSum(array, target) {
  // Write your algorithm here
}
function hasTargetSum(array, target) {
  // iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    // for each number, check if there is another number that sums up to the target
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        // if found, return true
        return true;
      }
    }
  }
  // if no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

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
