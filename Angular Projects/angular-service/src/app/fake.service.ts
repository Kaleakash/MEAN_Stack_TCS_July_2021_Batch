import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Fake } from "./fake.model";
@Injectable()
export class FakeService {
    constructor(public http:HttpClient){            // DI for Http
    }
    display():string {
        return "Welcome to User-Defined Service using DI";
    }
    // converting all json data into fake Array model class. 
    loadFakeJsonData() : Observable<Fake[]> {
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }
    // loadFakeJsonData() : void {
    //     this.http.get("https://jsonplaceholder.typicode.com/todos").
    //     subscribe(
    //     data=>console.log(data),
    //     error=>console.log(error),
    //     ()=>console.log("completed"));
    // }

}