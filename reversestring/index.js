// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1 
function reverse(str) {
    // turn the string into an array
    let splitstring = str.split("");

    // reverse the array 
    let reversedarray = splitstring.reverse();

    // turn it back to a string  
    let joinarray = reversedarray.join("");

    return joinarray
}

// Soultion 1  Refactored 
function reverserefactored(str) {

    return str
        .split("")
        .reverse()
        .join("");
}

// Solution 2

function reverse2(str) {
    
    // string that we will assemble over time by the ittaration 
    let reversed = '';
    
    // for each character of string, will iterate through = ES6 syntax of for loop
    for (let character of str ) {
        reversed = character + reversed;
        // debugger;
    }

    return reversed
}
// reverse2('hello');


// Solution 3

function reverse3(str) {

    // reversed is rev and char is characters, the " " make the result of the reduce into a string 
    return str.split("").reduce((rev, char) => char + rev, "");

}


module.exports = reverse3;
