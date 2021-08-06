// object creation using ES6 in typescript 
// class Employee {
//     id=100;
//     name="Ravi";
//     age =21;

//     dis(): void {
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);
//     }
// }
// let emp1 = new Employee();
// emp1.dis();
// let emp2 = new Employee();
// emp2.dis();

// parameterized constructor 
// class Employee {
//     private id:number;
//     private name:string;
//     private age:number;
//     constructor(id:number,name:string,age:number){
//         this.id = id;   // this.id instance and id is local 
//         this.name = name;
//         this.age = age;
//     } 
//     dis(): void {
//         console.log(" id "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);
//     }  
// }
// let emp1 = new Employee(100,"Raj",21);
// let emp2 = new Employee(101,"Rajesh",22);
// emp1.dis();
// emp2.dis();
// //emp1.id=-100;       // can't change 
// //console.log(emp1.id)    // cant' access through object 


// constructor short cut initialization 
class Employee {
    // we can use access specifiers(private/public) with parameter variable
    // to make the variable as instance variable.  
    // typescript doesn't support multiple constructor 
    // to make multiple constructor work we have to use optional or 
    // default initialzaton parameter concept. 
    constructor(private id:number,public name:string,private age?:number){  } 
    dis(): void {
        console.log(" id "+this.id);
        console.log("name is "+this.name);
        console.log("age is "+this.age);
    }  
}
let emp1 = new Employee(100,"Raj",21);
let emp2 = new Employee(101,"Rajesh",22);
let emp3 = new Employee(102,"Munjaap");

emp1.dis();
emp2.dis();
console.log(emp1.name)
//console.log(emp1.id)
