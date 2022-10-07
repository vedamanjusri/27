//function 1
const foods=["Pizza","Burger","Fingerchips","Donut","SpringRoll"];
const modifiedFood =foods.slice(1,4);
console.log(modifiedFood)
//function 2
foods.splice(2,0,"noodles","icecream");
console.log(foods);
//function 3
const numberArray=[12,324,213,4,2,45,4234];
var even = numberArray.filter((value)=> value % 2===0);
console.log(even);
//function 4
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

//Function 5
console.log("Function 5  Map:");
const myArray = [11, 34, 20, 5, 53, 16];
let arr = myArray.map(function(value)
{
    return value*value;
});
console.log(arr);

//Function 6
console.log("Function 6 : Reduce");
const array1=[2, 3, 5, 10];
function multiply(a,b)
{
    return a*b;
}
const muloutput = array1.reduce((a,b)=>{return multiply(a,b)},2);
console.log(muloutput);