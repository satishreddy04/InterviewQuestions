
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
    




