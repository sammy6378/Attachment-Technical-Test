//  Write a program to generate the Fibonacci sequence up to 100.

const holdNums = [];
let first = 0;
let second = 1;
let Fibonacci;

console.log(first); // printing the first number

while(second <= 100){

   Fibonacci = first + second;   // sequence to add the numbers as we loop through to a 100
   first = second; // the number in the second position is initialized to be the first
   second = Fibonacci; 

   holdNums.push(Fibonacci); // add the numbers in an array
}

console.log(holdNums); //prints 1, 2,3,5,8,13,21,34,55,89,144
