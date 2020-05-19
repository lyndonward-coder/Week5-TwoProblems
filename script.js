function prime_position(int){
//create an array with prime values up to 19
var arr = [2,3,5,7,11,13,17,19];
//if the prime wanted is greater than the value of 8th prime return coming
    if(int > 8){
    return 'coming';
}
//Give the value of the prime
return arr[int -1 ];
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
//sort the area by ascneding value (lowest to highest)
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





