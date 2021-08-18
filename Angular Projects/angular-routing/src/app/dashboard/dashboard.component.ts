import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user?:string=""
  //DI  for ActivatedRoute 
  
  constructor(public activeRoute:ActivatedRoute,public router:Router) { 
    this.activeRoute.params.subscribe(data=>this.user=data.uname);
  } 

  ngOnInit(): void {
  }

  logout(){
      this.router.navigate(["login"]);
  }
}
