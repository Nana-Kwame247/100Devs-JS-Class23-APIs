//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let listOfNumbers = [45, 76, 90, 100, 23];

let sum = listOfNumbers.reduce((acc, x) => acc + x, 0);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// function squaredNumbers(arr) {
//   // arr.forEach((x, i) => x ** 2);

//   for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     let product = arr[i] ** 2;
//     console.log(product);
//   }
// }

let newArr = listOfNumbers.map((num) => num ** 2);
console.log(newArr);

// console.log(squaredNumbers([2, 4, 6]));

//Create a function that takes string
//Print the reverse of that string to the console

function splitReverse(a) {
  return a.split("").reverse().join("");
}
console.log(splitReverse("Nana KWAME"));
splitReverse("Nana KWAME");

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = (str) => str === str.split("").reverse().join("");
