/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    let lastLetter = textInput.length - 1;
    
    for (let i = 0; i < textInput.length; i++) {
        if (lastLetter === 1) {
            return console.log(true)
        }
        else if (textInput.charAt(lastLetter) === textInput.charAt(i)) {
            lastLetter--;
        }
    }

    return console.log(false)
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console
checkPalindrome(testString);
checkPalindrome(testString2);