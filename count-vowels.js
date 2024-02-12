
// Write a program that counts the number of vowels in a sentence.

function loopString(word){

    let charCount = 0;

    const vowels = ['a','e','i','o','u'];

    for(let char of word){ // loop through the word passed in the function

        let lowerCaseChar = char.toLowerCase(); // convert word to lowercase before checking the count of vowels

        if(vowels.includes(lowerCaseChar)){  // check if the word has any vowels

            charCount++; //increment the vowels and store the in the charCount variable
        }
    }
    return charCount;
}

console.log(loopString("SAMUEL mwangi")); //prints 5