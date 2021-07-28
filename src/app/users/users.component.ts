import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {IUser} from "../models/IUser";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users: IUser[];
  constructor(private userService:UsersService) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users=value);
  }

}
