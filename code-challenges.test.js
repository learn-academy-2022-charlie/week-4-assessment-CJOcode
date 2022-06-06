// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("rmvIndexShuffle", () => {
     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
        it('does not match if received does not contain expected elements', () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
       
          
            expect(["blue", "green", "yellow", "pink"]).not.toEqual(expect.rmvIndexShuffle(colors1));
            expect(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).not.toEqual(expect.rmvIndexShuffle(colors2));
          });
    });
  
      
  
// GOOD FAILURE:
//   FAIL  ./code-challenges.test.js
//   rmvIndex0Shuffle
//     ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (4 ms)

//   ● rmvIndex0Shuffle › takes in an array, removes the first item from the array and shuffles the remaining content.

//     ReferenceError: rmvIndex1Shuffle is not defined


// b) Create the function that makes the test pass.

// pseudo --->
// Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// Name the function rmvIndexShuffle with a array as the parameter
    // Inside the function create a variable called newArr that's value is the array.slice(1) which separates the end of the array from the first index.
    // Next .sort through newArr and use math.random to randomize the array.
    // Return newArr

    const rmvIndexShuffle = (array) => {
        let newArr = array.slice(1);
        newArr.sort(() => Math.random() - 0.5);
        return newArr;
    }
// I dont know why this test keeps failing because I know this code works. I followed the link for running this type of jest test where the code does not exactly match the output order but contains the same elements. It keeps telling me that I have a syntax error for 'const' when calling on my function where it expects ','?. I looked up the error code and every thing I saw said its more of a general code that no one really had an exact answer for what might be wrong.
    // FAIL  ./code-challenges.test.js
    // ● Test suite failed to run
  
    //   SyntaxError: /Users/learnacademy/Desktop/week-4-assessment-CJOcode/code-challenges.test.js: Unexpected token, expected "," (51:4)
  
    //     49 | // b) Create the function that makes the test pass.
    //     50 |
    //   > 51 |     const rmvIndexShuffle = (array) => {
    //        |     ^
    //     52 |         let newArr = array.slice(1);
    //     53 |         newArr.sort(() => Math.random() - 0.5);
    //     54 |         return newArr;




// // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("ascendOrder", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {

        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
  
      //an expect method, nested within the test block, calling on the ascendOrder() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(ascendOrder(nums1)).toEqual([-8, 90])
      expect(ascendOrder(nums2)).toEqual([5, 109])
    })
  })

// // GOOD FAILURE:
// // FAIL  ./code-challenges.test.js
// // ascendOrder
// //   ✕ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (1 ms)

// // ● ascendOrder › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// //   ReferenceError: ascendOrder is not defined


// // b) Create the function that makes the test pass.

// Pseudo code --->
// Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// Name the function ascendOrder which takes an array as the parameter
    // Within the function create an variable with an empty array called finalArr
    // Create another variable called newArr which uses .sort to iterate through an array organize the array in ascending order
    // Then create 2 more variables one called firstIndex which has the value that use .shift to remove the 0 index. The other called lastIndex which uses .pop to removes the last index. 
    // Lastly, push firstIndex and lastIndex into finalArr and return finalArr


const ascendOrder = (array) => {
    let finalArr = []
    let newArr = array.sort(function(a, b){return a-b})
    let lastIndex = newArr.pop()
    let firstIndex = newArr.shift()
    finalArr.push(firstIndex, lastIndex)
    return finalArr
}

// // TEST PASSED:
// // PASS  ./code-challenges.test.js
// // ascendOrder
// //   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (2 ms)





// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

describe("noDups", () => {

        // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
      
          //an expect method, nested within the test block, calling on the noDups() function, followed by the .toEqual() matcher that checks the expected output of the function return.
          expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
      })
// // GOOD FAILURE:
// // FAIL  ./code-challenges.test.js
// // noDups
// //   ✕ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)

// // ● noDups › takes in two arrays as arguments and returns one array with no duplicate values.

// //   ReferenceError: noDups is not defined

// // b) Create the function that makes the test pass.

// Pseudo --->
// Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// Name the function noDups that takes in two arrays as the parameter.
      // Within the function, first concat both arrays an assign them to a variable called newArr
      // Create an empty array assigned to the variable finalArr
      // Create a for loop that iterates through newArr with a conditional statement
        // Use the method indexOf that checks whether a number is already in finalArr.
            // If it is not there, push that value into finalArr.
      // return finalArr

var noDups = (array1, array2) => {
    let newArr = array1.concat(array2)
    let finalArr = []
    for (i = 0; i < newArr.length; i++) {
        if (finalArr.indexOf(newArr[i]) === -1) {
        finalArr.push(newArr[i])
        }        
    } return finalArr
}

// // CODE PASSES:
// // PASS  ./code-challenges.test.js
// // noDups
// //   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (4 ms)