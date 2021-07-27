import {Component, Input, OnInit} from '@angular/core';
import {IUserModel} from "../models/UserModel";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input()
  userObj:IUserModel;
  constructor() { }

  ngOnInit(): void {
  }

}
