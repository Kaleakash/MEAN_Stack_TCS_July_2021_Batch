import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = true;
  f2:boolean = false;
  b1:string="show";
  flag:boolean = false;
  stdNames:Array<string>=[]
  // employees:Employee[]=[]
  employees:Array<Employee>=new Array();

  constructor() {
    let emp1 = new Employee(100,"Raj",12000);
    let emp2 = new Employee(101,"Raju",14000);
    let emp3 = new Employee(103,"Ramesh",16000);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
   }
  ngOnInit(): void {
  }
  changeValue(){
    this.f1 = false;
    this.f2 = true;
  }
  toggle(){
      if(this.flag){
        this.flag=false;
        this.b1 = "Show";
      }else {
        this.flag=true;
        this.b1 = "Hide";
      }
  }
  addName(nameRef:any){
    let name = nameRef.value;
    this.stdNames.push(name);
  }
}
