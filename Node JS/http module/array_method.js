let num = [10,20,30,40,50,60,70];
let result1 = num.find(n=>n==20);   // if element present it return same element 
console.log(result1)
let result2 = num.find(n=>n==200);  // if element not present it return undefined. 
console.log(result2)
let result3 = num.findIndex(n=>n==20);  // if element present it return index position 
                                        // of that element 
console.log(result3)

let result4 = num.findIndex(n=>n==200);  // if element is not present it return -1
console.log(result4)


