// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array) {
    let sum = 0;
    for(let i of array){
        sum += i;
    }
    console.log(sum);
}

// Test for sum array
let testArray = [1, 2, 3, 4, 5]; // 15

// TODO: display the sum of the array in the console

sumArray(testArray);