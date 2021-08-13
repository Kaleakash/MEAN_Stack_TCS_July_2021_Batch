import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg1:string=""
  msg2:string=""
  constructor(public ff:FakeService) { }    // DI for Service 

  ngOnInit(): void {
  }
  fun1() {
    let mySer = new MyCustomService();
    this.msg1= mySer.display();
  }
  fun2() {
    this.msg2=this.ff.display();
  }
}
