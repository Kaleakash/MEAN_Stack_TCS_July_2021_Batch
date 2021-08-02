//ES5 style object creation 
// function Employee() {
//         this.id =100;   //instance property 
//         var fname = "Ravi"; // local variable not a part of object. 
//         let age = 21;       // local variable not a part of object. 
//         this.dis= function() {
//             document.write("<br/>This is employee behaviour");
//             document.write("<br/>id is "+this.id)
//             document.write("<br/>name is "+fname)
//             document.write("<br/>age is "+age);
//         }
//         let dis1 = function() {
//             document.write("This is express style function ")
//         }
//         function dis2() {
//             document.write("This is normal function")
//         }
// }
// var emp1 = new Employee();  // memory created. 
// document.write(emp1.id)
// //document.write(emp1.fname)
// //document.write(emp1.age);
// emp1.dis();
// //emp1.dis1();      // we can't access 
// //emp1.dis2();      // we can't access 


// ES5 function syntax 
// function Employee() {
//         this.id=100;
//         this.name = "Ramesh";
//         this.salary = 12000;        // employee property 
        
//         this.dis = function() {         // employee behaviour 
//             document.write("<br/>id is "+this.id);
//             document.write("<br/>name is "+this.name);
//             document.write("<br/>salary is "+this.salary);
//         }
// }
// var emp1 = new Employee();      // memory created. 
// emp1.dis();     // we can call behaviour 
// alert(emp1.id)   // we can access property
//var emp2 = new Employee();      // memory created. 
// emp2.dis();     // we can call behaviour 
// alert(emp2.id)   //  

// ES5 parameter constructor(function) concept. 
// function Employee(id,name,salary) {
//     this.id=id;
//     this.name = name;
//     this.salary = salary;        // employee property 
//     this.dis = function() {         // employee behaviour 
//         document.write("<br/>id is "+this.id);
//         document.write("<br/>name is "+this.name);
//         document.write("<br/>salary is "+this.salary);
//     }
// }
// var emp1 = new Employee(100,"Raj",12000);
// var emp2 = new Employee(101,"Ramesh",14000);
// emp1.dis();
// emp2.dis();


//ES6 style object creation. 
// class Employee {
//     id=100;
//     name="Raj"
//     salary=12000;       // not require this keyword. 

//     dis() {             // not require this keyword 
//         document.write("<br/>id is "+this.id);   // to access we have to use this keyword
//         document.write("<br/>name is "+this.name);
//         document.write("<br/>salary is "+this.salary);
//     }
// }
// let emp1 = new Employee();
// emp1.dis();
// let emp2 = new Employee();
// emp2.dis();

// Constructor Example 
// class Employee {
//         constructor(id,name="Unkown",salary=8000){
//                 this.id = id;
//                 this.name = name;
//                 this.salary = salary;   // initialization 
//         }
//         dis() {
//             document.write("<br/>id is "+this.id);
//             document.write("<br/>name is "+this.name);
//             document.write("<br/>salary is "+this.salary);
//         }
// }
// let emp1 = new Employee(100,"Raj",12000);
// let emp2 = new Employee(101,"Ramesh",14000);
// let emp3 = new Employee(102,"Raju")
// let emp4 = new Employee()
// emp1.dis();
// emp2.dis();
// emp3.dis();
// emp4.dis();


// literal style object creation from ES5 style synax 

let emp1 = {id:100,name:"Ramesh",age:21};
document.write("<br/>id is "+emp1.id)
document.write("<br/>Name is "+emp1.name)
document.write("<br/> age is "+emp1.age)








