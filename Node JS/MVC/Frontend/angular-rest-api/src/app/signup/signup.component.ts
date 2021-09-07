import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(public loginSer:LoginService) { }
  msg?:string;
  ngOnInit(): void {
  }

  accountCreate() {
    let login = this.loginRef.value;
 
    this.loginSer.loginAccountCreate(login).
    subscribe(result=>this.msg=result,error=>console.log(error));
 
    this.loginRef.reset();
  }
}
