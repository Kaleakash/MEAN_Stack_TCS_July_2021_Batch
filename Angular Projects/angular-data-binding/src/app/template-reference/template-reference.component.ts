import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {
  fname:string=""   // instance variable 
  sum:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  // passValue(nameRef:HTMLInputElement){
  //     this.fname = nameRef.value;
  // }
  passValue(nameRef:any){
    this.fname = nameRef.value;
}

addNumber(n1:any,n2:any){
  this.sum = eval(n1.value)+eval(n2.value);
}

}
