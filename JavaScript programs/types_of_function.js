// // Normal function 
// display1();

// function display1() {
//     alert("This is a normal function")
// }

// display1();

// //Expression style function with function Name 
// var dis2 = function display2() {
//         alert("This is expression style function")
// }
// //display2(); Error 
// dis2();

// //dis3(); //Error 
// //Expression style function with function without name ie anonymous function  
// var dis3 = function() {
//     alert("This is expression style function ")
// }


// function greeting(fname,callback){
//         return "Welcome "+callback(fname);
// }
// //Normal style 
// function maleInfo(name){
//     return "Mr "+name;
// }
// // expression style 
// var femaleInfo = function(name){
//     return "Miss "+name;
// }

// document.write(greeting("Raj",maleInfo));
// document.write("<br/>")
// document.write(greeting("Seeta",femaleInfo))
// document.write("<br/>")
// document.write(greeting("Simran",function(name){
//     return "Miss "+name;
// }))

//expression style
// var dis1= function() {
//     document.write("Expresion style function");
// }
// dis1();
// var addNumber = function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br> sum is "+addNumber(10,20));

// //Arrow style function 
// var dis2 = ()=>document.write("<br/>Arrow style function")
// dis2();

// // arrow function by default return without return keyword. 
// var sumOfNumber = (a,b)=>a+b;
// document.write("<br> Sum of two number is "+sumOfNumber(100,200));

// // arrow function with multiple line statement 

// var findLargest = (a,b)=> {
//     if(a>b){
//         return "a is largest";
//     }else {
//         return "b is largest";
//     }
// }

// document.write("<br> Find the largest "+findLargest(10,50));

//Normal funtion 
function display() {
    document.write("<br> Normal function execute only if we call ")
    document.write("<br> WE can call the function from script or from html using event")
}
display();
display();
display();

//IIFE function 
//syntax    
(function(){
    document.write("<br> IIFE function coding...")
})();

// IIFE function with passing parameter 
(function(a,b){
    var sum = a+b;
    document.write("<br/>sum of two number is "+sum)
})(10,20);


