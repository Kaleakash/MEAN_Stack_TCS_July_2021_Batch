var num1 = [10, 20, 30, 40, 50, 60];
console.log(num1);
console.log("using in loop"); // it provide index 
for (var i in num1) {
    console.log("index is " + i);
}
var sum = 0;
console.log("using of loop"); // it provide the value 
for (var _i = 0, num1_1 = num1; _i < num1_1.length; _i++) {
    var n = num1_1[_i];
    console.log(" Value is " + n);
    sum = sum + n;
}
console.log("Sum of number is " + sum);
