import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FakeService {
    constructor(public http:HttpClient){            // DI for Http

    }

    display():string {
        return "Welcome to User-Defined Service using DI";
    }

    loadFakeJsonData() : void {
        this.http.get("https://jsonplaceholder.typicode.com/todos").
        subscribe(data=>console.log(data),
        error=>console.log(error),
        ()=>console.log("completed"));
    }
}