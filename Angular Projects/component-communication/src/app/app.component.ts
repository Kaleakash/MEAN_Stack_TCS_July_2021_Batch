import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname:string="";
  studentNames : Array<string>=["Raj","Seeta","Reeta","Meeta"];
  
  @ViewChild(Child1Component) // DI for child1 component
  child1?:Child1Component;  // not creating new keyword.    
  cAge?:number;
  passValue(nameRef:any){
    this.pname = nameRef.value;
    this.studentNames.push(this.pname);
     
  }
  callChildComponetData() {
      this.child1?.childFun();    // calling child1 component function  
      this.cAge=this.child1?.childAge;   // accessing and storing child componet variable value 
                                          // in parent component variable.    
  }
}
