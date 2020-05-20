function prime_position(int){
    var arr = [];
    var num = 0;
    var prime = 0;
//Intialize varibles
   while(arr.length < int){
    num++;    
//Check for primes
    if(num < 2){
        prime = 2;
    }
    for(var i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                prime++;
//count number of factors
            }
            if(prime >= 1){
                break;
//if two or more factors it's not a prime
            }
        }
        if(prime <= 0){
            arr.push(num);
//if a prime add to array
        }
        prime = 0;
//reset number of factors
   }
//return prime number 
   return arr[int-1];
}




     




function sort_subtract(int){
str = String(int);
//convert integer into string
strx = "";
stry = "";
arr = [];
//intialzing varibles to be used later
for( i = 1; i<str.length+1; i ++){
    arr.push(str.substring(i-1,i));
}
//create an array with each digit of the integer as a value
arr.sort((a,b) => a-b);
//sort the array by ascneding value (lowest to highest)
for( q = 0; q<arr.length; q++){
    strx += arr[q];
}
//create a string with lowest value 
for( p = arr.length-1; p >= 0; p--){
    stry += arr[p];
}
//create string with greatest value 
var x = parseInt(strx, 10);
var y = parseInt(stry, 10);
//turn the strings into integers with base ten 
var diffrence = y-x;
return diffrence;
//get the diffrence of the two numbers and return that diffrence 
}





