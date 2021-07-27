import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {
  users: IUserModel[] = [
    {name: "vasya", age:31, status:false },
    {name: "kolya", age:32, status:true},
    {name: "olya", age:23, status:false},
    {name: "max", age:34, status: true},
    {name: "ivan", age:52, status:true}
  ];



  constructor() { }


}
