// Display the even numbers from an array 

// 1st method
const fruits = [1,2,3,4,5,6,7,8,9];
const even = [];

for (let i= 0; i < fruits.length; i++){
    if ( fruits[i] % 2 === 0){
        even.push(fruits[i]);
    }
}
console.log(even)
// 2nd method
const numbers = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// Display reversed array
const num = [1,2,3,4,5,6,7,8,9]
const down = num.reverse();
console.log(down);


// Loop through an array of numbers and print "Even" if the number is even and "Odd" if it’s odd.
const numb = [1,2,3,4,5,6,7,8,9];

for( i = 0; i < numb.length; i++){
    if ( numb[i] % 2 === 0){
        console.log("Even");
    } else { console.log("Odd")}
}


// Check if the first element of an array is greater than 10. If yes, print "Big Number".
const bigOnes = [1,2,3,4,5,6,7,8,90]

for ( i = 0; i < bigOnes.length; i++){
    if ( bigOnes[i] > 10){
        console.log("Big Number")
    } else {console.log(" Small Number")}
}


// Given an array of student scores, print "Pass" for scores above 50 and "Fail" for scores below 50.
const students = [10, 99, 87, 50, 78, 49]

for (i = 0; i < students.length; i++){
    if (students[i] > 50){
        console.log("Pass");
    } else if (students[i] = 50){ 
        console.log("Repeat");
    } else { console.log("Fail")}
}


// Write a function that takes an array of numbers and returns the sum.
const totalNumbers = [1,2,3,4,5,6,7,8,9];
let sum = 0;

for (i = 0; i < totalNumbers.length; i++){
    sum += totalNumbers[i];
}
console.log(sum)


// Write a function that takes an array and returns the largest number.
const laNum = [1, 22, 34, 5, 78, 52];
let largestNumber = laNum[0];

for (i = 0; i < laNum.length; i++){
    if (laNum[i] > largestNumber) {
    largestNumber = laNum[i]; 
  }
}
console.log(largestNumber)


//Write a function that takes an array of strings and returns the longest string.
const words = ["Timberwolves", "Students", "Thunderbolts"];
let longestString = [0];

for (i = 0; i < words.length; i++){
    if (words[i] > longestString){
        longestString = words[i];
    }
}
console.log(longestString)


// Swap the first and last elements of an array.
const deals = [1, 2, 4, 5, 7, 8, 9];
[deals[0], deals[deals.length - 1]] = [deals[deals.length - 1], deals[0]];
console.log(deals); 

// Write a program to count how many times "apple" appears in an array.
const fruitss = ["apple", "banana", "apple", "orange", "apple"];
let appleCount = 0;

for (let i = 0; i < fruitss.length; i++) {
  if (fruitss[i] === "apple") {
    appleCount++;
  }
}
console.log(appleCount);


// Given an array of numbers, create a new array that contains only the numbers greater than 5.
const greNumbers = [2, 8, 4, 6, 1, 9];
const greaterThanFive = greNumbers.filter(num => num > 5);
console.log(greaterThanFive);



//Write a function that removes all duplicate values from an array.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const sampleArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(sampleArray);
console.log(uniqueArray);


// Given an array of names, use a loop to print "Hello, [name]!" for each.
const names = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}