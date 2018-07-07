// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution 1
function palindrome(str) {
    let reverseredstr = str.split('').reverse().join('');

    if (str === reverseredstr) return true
    else return false

    // or just str === reversedstr as it is a boolean statement by default
    
}

// Solution 2
function palindrome2(str) {
    
    // every() checks if every element in an array pass a test so it will compare the first and last element and then the other to see if they are the same but a lot of work so it might take more time
    str.split('').every((char, i) => {
        return char === str[str.length - i - 1]})

    // i being the index 
    // str[str.length - i - 1] is check the last letter by the - 1 on the length    
}


module.exports = palindrome;
