// number of parameter must be match 
function add(a,b){
    console.log(a)
    console.log(b);
}
add(10,20);
add(10.20,40.50);
add("Raj","Patil");
//add(10);      Error 
//add();        Error 
function addNumber(a:number,b:number){
    let sum = a+b;
    console.log("sum of two number is "+sum);
}
addNumber(10,20);
addNumber(10.10,20.20);
//addNumber("Raj"," Deep");     Error 

// function with no return type 
function info() : void {
    console.log("info function with void type")
   //return "Welcome"
}
// function with string return type 
function sayHello(name:string): string {
    return "Welcome "+name;
}
// function may return or not. so without return type by default any consider. 
// any can return any thing 
function hello(a:any): any {
    //return 100;
    //return "Welcome"
}

// optional parameter (optional parameter default value is undefined) 
// ? means parameter is optional 
// by default age value is undefined. 
// optional parameter declaration from right left 
// so you can give one variable or more than one variable 
//as optional but no gap between two optional variable. 
function empInfo(id?:number,name?:string,age?:number):void{
    console.log("id is "+id);
    console.log("name is "+name)
    console.log("age is "+age);
}
empInfo(100,"Ravi",21);
empInfo(101,"Ramesh")
empInfo(102)
empInfo();

// default initialization 
function stdInfo(sid:number=0,sname:string="Unknown",age:number=7){
    console.log("sid is "+sid);
    console.log("sname is "+sname);
    console.log("age is "+age);
}
stdInfo(1,"Ajay",12);
stdInfo(2,"Vijay");
stdInfo(3)
stdInfo()

// Rest operator or parameter 
// rest parameter is use to recieve 0 or 1 or many parameter.
// In one function we can use only one rest operator 
// it must be last parameter in function 
function employeeInfo(id:number,name:string,salary:number,...skillSet:string[]){
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("salary is "+salary);
    console.log("Number of skill set is "+skillSet.length)
    console.log("skillSet is "+skillSet);
} 
employeeInfo(1,"Raj",12000)
employeeInfo(2,"Ravi",14000,"C")
employeeInfo(3,"Raju",18000,"C","Java");
employeeInfo(4,"Ram",22000,"C","Java","Angular","HTML5");






