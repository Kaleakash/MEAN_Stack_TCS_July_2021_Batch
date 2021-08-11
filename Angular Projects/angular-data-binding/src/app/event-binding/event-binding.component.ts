import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="";
  f1:boolean = true;
  f2:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  fun(){
    this.msg = "Welcome to Angular"
    console.log("Event Fired...");
    console.log(this.msg);
    this.f1= false;
    this.f2 = false;
  }

}
