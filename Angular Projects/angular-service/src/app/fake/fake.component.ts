import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  fakeData:Array<Fake>=[];
  flag:boolean = false;
  constructor(public fake:FakeService) { }  //DI for Service 

  ngOnInit(): void {
  }

  callService() {
      this.flag = true;
      this.fake.loadFakeJsonData().subscribe(data=>this.fakeData=data,
        error=>console.log(error),()=>console.log("completed"))
  }
}
