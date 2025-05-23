// Returning the sum
function add(a, b){
    return a+b;
    }
    console.log(add(3,5))
    
    
    // isEven
    function isEven(number) {
      if (number % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
    console.log(isEven(5))
    
    // Positive and Negative
    function checkIf(num){
        if (num > 0) {return "positive"; }
        if (num < 0) { return "negative";}
        else { return "neutral"}
    }
    console.log(checkIf(0))
    
    // reverse string
    function reverseString(name){
        let reversed = "";
        for (let i = name.length - 1; i >= 0; i--) {
            reversed += name[i];
        }
        return reversed;
    }
    console.log(reverseString("hello"))
    
    //  maxNumber
    function maxNumber(a,b){
        if (a>b) { return "greater";}
        else {return "smaller";}
    }
    console.log(maxNumber(5,8))
    
    // checkAge 
    function checkAge(age){
        if (age >= 18) {return "You are an adult"}
        else {return "You are a minor"}
    }
    console.log(checkAge(10))
    
    // leap year 
    function leapYear(year){
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
          return "leap year";
        }
       else {
        return "not leap year"
      }
    }
    console.log(leapYear(2003))

    // string check hello
    function checkString(str){
        if (str === "hello"){
            return "hello"
        }
        else {
            return "not hello"
        }
    }
    console.log(checkString("hello"))
    
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
}
console.log(sum);