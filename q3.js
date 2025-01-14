// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    array.sort();

    let saver;
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] === array[i + 1]){
            array.splice(i + 1, 1);
        }
    }

    console.log(array);
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console

removeDuplicates(testArray3);
