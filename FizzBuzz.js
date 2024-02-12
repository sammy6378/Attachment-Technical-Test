// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
//  multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

 let arrayNums = [];

 for(let i = 0; i <= 100; i++){
    // check if the number is a multiple of three
   if(i % 3 === 0){

    arrayNums.push('Fizz');

   }else if(i % 5 === 0){  // checking if a number is a multiple of 5

    arrayNums.push('Buzz');  // push the numbers in the array arrayNums[]

   } if(i % 3 === 0  && i % 5 === 0){
    arrayNums.push('FizzBuzz');
   }
 }

 console.log(arrayNums);







 



   

  

 




 