let num1:number[]=[10,20,30,40,50,60];
console.log(num1);
console.log("using in loop");       // it provide index 
for(let i in num1){
        console.log("index is "+i);
}
let sum = 0;
console.log("using of loop")        // it provide the value 
for(let n of num1){
    console.log(" Value is "+n);
    sum = sum +n
}
console.log("Sum of number is "+sum)