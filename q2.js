// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let max = 0;
    for (let element of array) {
        if (element > max) {
            max = element
        }
    }
    console.log(max);
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

// TODO: display the largest number in the array in the console
findLargest(testArray2);