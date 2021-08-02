// var num1 = [10,20,30,40,50,60]; //literal style 

// var num2 = new Array(10,20,30,40,50,60);    // memory creation 

// document.write("display array as a string<br/>")
// document.write(num1)
// document.write("<br>")
// document.write(num2)
// document.write("<br>")
// document.write(num1.join("-"))
// document.write("<br> Get Element using index position "+num1[0])
// document.write("<br> Get Element using index position "+num1[1])
// document.write("<br> Size of array "+num1.length);
// document.write("<br> Display the records using for loop<br>")
// for(var i=0;i<num1.length;i++){
//     document.write("<br> value of i is "+num1[i]);
// }
// document.write("<br/>Display the value one by one using callback <br/>")
// num1.forEach(display)

// function display(n) {
//     document.write("<br> Value of n is "+n)
// }
// document.write("<br> Another way to retrieve the value <br>")
// num1.forEach(function(n){
//     document.write("<br/> Value of n is "+n);
// })
// document.write("<br> Another way to retrieve using arrow function <br>")
// num1.forEach(n=>document.write("<br> VAlue of n is "+n));

//var num1 = [10,20,30,40,50];
// document.write("<br/>")
// document.write(num1);
// num1.push(100)      // add the element at last 
// num1.push(200);
// num1.unshift(300)   // add the element at begining 
// num1.unshift(400);
// document.write("<br/>")
// document.write(num1);
// num1.pop();     // remove from last , 200
// num1.shift();      // remove from first, 400
// document.write("<br/>")
// document.write(num1);
// var result1 = num1.find(e=>e==300);
// // var result1 = num1.find(function(e){
// //     return e==300;
// // }) 
// var result2 = num1.find(e=>e==1111);
// document.write("<br> Result1 is "+result1)
// document.write("<br> Result2 is "+result2)
var num1 = [10,20,30,40,50];
document.write(num1);
document.write("<br/>")
//1st parameter index position, 2nd parameter number of 
//element to delete , 3rd parameter replace or add 
//num1.splice(2,1)    //3rd position element remove ie 30
//num1.splice(2,2)       // from 2nd position it remove 2 element ie 30 and 40
//num1.splice(1,1,100);   // 1 position element replace by 100
//num1.splice(2,0,100,200,300);   // from 2nd position add 100 , 200, 300 element 
num1.splice(2,100);
document.write(num1);   























