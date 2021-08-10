import {Component} from '@angular/core';


@Component({
    selector:"app-child",
    templateUrl:"./child.component.html",
    styleUrls:["./child.component.css"]
})
export class ChildComponent {
    msg:string="This is child component";
}