

// Write a program that takes an integer as input and returns true if the input is a power of two.

function checkPower(num){
    
    if((num > 0) && ((num & (num - 1)) == 0)){  //  num & (num -1) == 0  condition to check if a number is a power of two
        // num > 0 ensures the number is positive
        console.log(true);
    }else{
        console.log(false);
    };
}



checkPower(8); // prints true