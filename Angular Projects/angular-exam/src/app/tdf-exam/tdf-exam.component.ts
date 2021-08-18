import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-exam',
  templateUrl: './tdf-exam.component.html',
  styleUrls: ['./tdf-exam.component.css']
})
export class TdfExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  allQuestion=[
    {question:"5+5",ans1:"10",ans2:"11",ans3:"12",ans4:"13",correctAns:"10"},
    {question:"5-5",ans1:"0",ans2:"1",ans3:"2",ans4:"3",correctAns:"0"}
  ]
}
