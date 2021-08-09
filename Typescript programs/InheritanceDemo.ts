//Simple Inheritance example 
// class Employee {
//     disEmp(): void{
//         console.log("Employee function")
//     }
// }
// class Manager extends Employee{
//     disMgr(): void {
//         console.log("Manage function")
//     }
// }
// let emp1 = new Employee();
// let mgr1 = new Manager();
// emp1.disEmp();
// mgr1.disMgr();
// mgr1.disEmp();


// Inheritance with properites 
class Employee {
    constructor(public id:number,public name:string,public salary:number){}    
    disEmp(): void{
        console.log("id is "+this.id);
        console.log("name "+this.name);
        console.log("salary is "+this.salary);
    }
}
class Manager extends Employee{
    constructor(id:number,name:string,salary:number,public numberEmp:number){
            super(id,name,salary);  // passing the value to super class constructor 
    }
    disMgr(): void {
        console.log("Number of emp "+this.numberEmp);
    }
}
let mgr1 = new Manager(100,"Raj",45000,10);
mgr1.disEmp();
mgr1.disMgr();


class Developer extends Employee{
    constructor(id:number,name:string,salary:number,public projectName:string){
            super(id,name,salary);
    }
    disDev(): void {
        console.log("Project Name "+this.projectName);
    }
}
