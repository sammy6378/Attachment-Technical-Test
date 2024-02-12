
// Write a program that takes an integer as input and returns an integer with reversed digit ordering.

let remainder;
let reversedNum = 0;

function reverse(num) {
    while (num !== 0) { //excute the block of code as long as num is not zero
        remainder = num % 10 // takes only the remainder
        reversedNum = reversedNum * 10 + remainder; //append the last digit of num to the variable reversedNum
        num = Math.floor(num / 10); //ensures integer division
    }
    return reversedNum; //return the reveversed number
}

console.log(reverse(2040)); //prints 402
