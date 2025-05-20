// All number 1-10
for(let i = 1; i <= 10; i++){
    console.log(i)
}

//Even numbers between 1-20
for(let even = 1; even <= 20; even++){
    if (even % 2 === 0){
        console.log(even)
    }
}

//the first 10 multiples of 5
for(let multi = 1; multi <= 10; multi++){
        console.log(multi * 5)
}


//numbers from 1 to 100, but for numbers divisible by 3 print "Fizz", for numbers divisible by 5 print "Buzz", and for numbers divisible by both print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//function sumNumbers(n) that returns the sum of all numbers from 1 to n. Call this function with n = 10 and print the result.
let sum = 0;
const totalSumNumbers = sumNumbers(10);
function sumNumbers(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(totalSumNumbers);

// A function countDown(start) that counts down from a given number start to 1.
countDown(5);
function countDown(start) {
  for (let i = start; i >= 1; i--) {
    console.log(i);
  }
}

//  Using a for loop, print numbers from 1 to 30, but skip numbers that are divisible by 4.
for (let i = 1; i <= 30; i++){
    if ( i % 4 === 0){
        continue;
    }
    console.log(i)
}

//Create a function reverseString(str) that takes a string as input and returns it reversed. Use a loop to implement this.
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); 

// Using a loop, print the sum of all odd numbers from 1 to 50.

let sumOfOddNumbers = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    sumOfOddNumbers += i;
  }
}
console.log(sumOfOddNumbers); 

// Create a for loop that prints "Hello" 5 times, and in each iteration, print the current iteration number (e.g., "Hello, iteration 1").
for (let i = 1; i <= 5; i++) {
  console.log(`Hello, iteration ${i}`);
}

// Using a for loop, find and print the largest number in an array of numbers.
const array = [3, 7, 2, 9, 5, 12, 6];
let largest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

//Write a function countVowels(str) that counts how many vowels are in a given string. Use a loop to check each character.
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("Hello World"));

// Create a for loop to find and print all numbers between 1 and 100 that are divisible by both 3 and 5.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Counting down from 30 to 1 using a for loop, but replacing multiples of 3 with "multple of 3".
countDown(30)
function countDown(start){
    for( let i = start; i >= 1; i--){
        if (i % 3 === 0){
            console.log('multiple of 3')
        } else {
                    console.log(i)
        }
    }
}


//Create a function called getSign that takes a number and uses an if statement to return "Positive", "Negative", or "Zero".

getSign(0)
function getSign(call){
    for (let i = call; i > 0; i++){
        if ( i > 0){
            console.log('Positive')
        } else if ( i = 0){
            console.log('Zero')
        } else {
            console.log('Negative')
        }
    }
}
console.log(getSign)
// Without errors
const numToTest = 9;
const sign = getSign(numToTest);

function getSign(number){
    if (number > 0) {
    return "Positive";
  } else if (number === 0) {
    return "Zero";
  } else {
    return "Negative";
  }
}

console.log(sign);

// Write a function that checks whether a given number is divisible by 3. If it is, return "Divisible by 3", otherwise return "Not divisible by 3".
const div = 3;
const check = multi(div);

function multi(nbr){
    if (nbr % 3 === 0){
        return "Divisible by 3";
    } else {
        return "Not divisble by 3";
    }
}
console.log(check)

//Write a function called temperatureCheck that takes a temperature.
const temp = 20;
const temperatureCheck = weather(temp);

function weather(nbr){
    if (nbr < 0) { 
        return "Freezing";
    } else if (nbr > 0 & nbr < 20){
        return "Cold";
    } else if (nbr > 20 & nbr < 35){
        return "Warm";
    } else {
        return "Hot";
    }
}
console.log(temperatureCheck)


//A function that takes a number and checks if it's both even and greater than 10. If so, return "Valid", otherwise return "Invalid".
const checking = 8;
const nbrCheck = number(checking);

function number(nbr){
    if (nbr % 2 === 0 && nbr > 10){
        return "Valid";
    } else {
        return "Invalid";
    }
}
console.log(nbrCheck)

//A function called findSmallest that takes two numbers and returns the smallest number. Use an if statement to compare them.

function findSmallest(a,b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}
console.log(findSmallest(4,5))

// A function called checkDiscount that takes a price as input. If the price is greater than 100, return "Discount Applied", otherwise return "No Discount".
const price = 200;
const checkDiscount = discount(price);

function discount(nbr){
    if (nbr > 100){
        return "Discount Applied";
    } else {
        return "No Discount";
    }
}
console.log(checkDiscount)


// A function that takes a number and checks if it’s a prime number. Use if statements to determine if the number is prime and return "Prime" or "Not Prime".
function checkForPrime(number) {
  if (number <= 1) {
    return "Not Prime";
  }

  if (number <= 3) {
    return "Prime";
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return "Not Prime";
  }

 
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

console.log(checkForPrime(2));  
