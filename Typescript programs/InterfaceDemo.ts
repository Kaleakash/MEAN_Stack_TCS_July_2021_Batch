// specification 
interface Bank {
    withdraw(): void;
    deposit(): void;
}
// class provide the implementation for that specifiction 
class Hsbc implements Bank {
    withdraw(): void{
        console.log("hsbc bank withdraw process")
    }
    deposit(): void{
        console.log("hsbc bank deposit process")
    }
}
class Sbi implements Bank {
    withdraw(): void{
        console.log("sbi bank withdraw process")
    }
    deposit(): void{
        console.log("sib bank deposit process")
    }
}
let obj1 = new Hsbc();
obj1.deposit();
obj1.withdraw();
let obj2 = new Sbi();
obj2.deposit();
obj2.withdraw();


interface Employee{
    id:number;
    name:string;
    salary:number;
    age?:number;
}

// literal style object creation syntax 

let emp1:Employee = {id:100,name:"Raj",salary:12000,age:21};
let emp2:Employee = {id:101,salary:14000,name:"Ramesh"};
let emp3:Employee = {id:102,name:"Ravi",age:34,salary:45000};

// class Employee {
//     constructor(public id:number,public name:string,public salary:number,public age?:number){}
// }

// let emp4 = new Employee(100,"Ramesh",45000);












