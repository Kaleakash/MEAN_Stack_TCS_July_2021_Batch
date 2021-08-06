// var num1 = [10,20,30,40,"Raj", true] In JavaSript 
// literal array creation in typescript 
let num1:number[]=[10,20,30,40,50,60];
let names:string[]=["Raj","Ravi","Rajesh","Ramesh"];
let info1:any[]=[100,"Ramesh",true,1000.50];


// generic style 
let num2:Array<number>=new Array(10,20,30,40,50,60);
let names2:Array<string>=new Array("Raj","Ramesh","Rajesh");
//let info2:Array<any> = [100,"Raj",12000];
let info2:Array<any>= new Array<any>(100,"Raj",12000);



