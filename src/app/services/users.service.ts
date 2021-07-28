import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private url = "https://jsonplaceholder.typicode.com/users"
  constructor(private httpClient: HttpClient) {
console.log("user ssdfsdf")
  }
  getAllUsers() :Observable<IUser[]>{
return this.httpClient.get<IUser[]>(this.url)
  }

  getUserById(id:number) :Observable<IUser>{
    return this.httpClient.get<IUser>(this.url + "/" + id)
  }
}
