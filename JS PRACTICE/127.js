

 function isEven(num) {
if(num % 2 === 0) {
  console.log('true')
} else console.log('false')
};

// ==================

 function factorial(num) {
   //find a result variable
   var result = 1;
   //calculate factorial and store value in result
for(var i = 2; i<= num; i++) {
  result *= i;
}
   // return the result variable
    return result;
 }


 // ==================

function kebabToSnake(str) {
  //replace all "-" with "_"'s
  var newStr = str.replace(/-/g , "_")
  //return str
  return newStr;
}
