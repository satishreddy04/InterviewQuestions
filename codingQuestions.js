
/*----Fibonacci Series------- */
function getFibonoci(n){
  let result = [0,1];
  for (var i=2;i<=n;i++){
    let s1 = result[i-1];
    let s2 = result[i-2];
    result.push(s1+s2)
  }
  console.log(result)
  return result

}
// Recursion means iterating over an operation by calling same function 
//itself untill result is arrived
const fibonacciUsingReccursion = num => {
  if (num < 2) {
    return num;
  }
  return fibonacciUsingReccursion(num - 1) + fibonacciUsingReccursion(num - 2);
};

/*----Sort Array function with out sort------- */
let x = [10,50,40,33,20];
for(var i=1;i<x.length:i++){
for(var j=0;j<i;j++){
    if(x[i]<x[j]){
      let temp = x[i]
      x[i] = x[j];
      x[j] = temp;
    }
}
}
console.log(x) // [10,20,33,40,50]
// Using sort method 
let x = [20,80,40,60]
x.sort((a,b)=>a-b);
console.log(x) // [20,40,60,80]

/*----Removiong duplicate items in an Array------- */

let orginalArray = [1,1,2,2]
let result = []
for(var i=0;i<orginalArray.length;i++){
if(result.indexOf(originalArray[i]==-1)){
  result.push(orginalArray[i])
}
}
console.log(originalArray)// [1,2]

//using ES6
//1.using set - set is used to remove the duplicate values from array 
let array = [1,2,1,2]
const result = [... new Set(array)]
console.log(result)//[1,2]
//2. using filter method
let array = [1,2,1,2]
const result = array.filter((item,index)=>array.indexOf(item)===index)
console.log(result)//[1,2]

/*----Factorial------- */
function fac(x){
if(x<0) return 
if(x===0) return 1;
return x * fac(x-1)
}
var functionFctoriala= fac(5);
console.log(functionFctoriala)

/*----sum of total------- */

function sum(x){
let total = 0;
for(let i = 0;i<x;i++){
    total = total + i
}
return total
}
var fianlSum= sum(5);
console.log(fianlSum)//10

/*----Reverse of String------- */

function reverseString(mainString){
  return mainString.split('').reverse().join();
}
let finalReverseString = reverseString("tranzeal")
console.log(finalReverseString);

/*----Plaindrome------- */
const palindrome = (str) => {
str = str.toLowerCase()
return str === str.split('').revers().join()
}
/*-------getRangeOfNumbersBetween -------*/
function getRange(min,max){
  let result = [];
for (var i=min+1;i<max;i++){
       result.push(i)
  } 
   console.log(result)
  return result
}
/*-----getSumofNumbersInArray ---*/
function getSumOFNum(arr){
  let result = 0;
  for(var i=0;i<arr.length;i++){
      result = result+arr[i]  
  }
  // we can use reduce instead of forloop
  //arr.reduce((a,b)=> a+b)
  console.log(result)
  return result
  }
  /*-----Reverse of a number ---*/
  function getReverseOFNumber(num){
    console.log(num.toString().split('').reverse().join(''))
    }
   /*-----Palendrome ---*/ 
  isPalindrome = (string) => {
  let strLen = Math.floor(string.length / 2);
  string = string.toLocaleLowerCase();

  for (let i = 0; i < strLen; i++) {
    if (string[i] !== string[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}
    




