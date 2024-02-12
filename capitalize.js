
// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.

let myName = 'samuel mwangi';

let word = myName.split(' '); //  split the sentence into an array of words to manipulate each word individually

// looping through my name

for( let name = 0; name < word.length; name++){

    word[name] = word[name][0].toUpperCase( ) + word[name].slice(1); //concatenates the first characters with the other words in the string
}

let nameCapitalized = word.join(' '); // returning array as a string

console.log(nameCapitalized); // prints Samuel Mwangi