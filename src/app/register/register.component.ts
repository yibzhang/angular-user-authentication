import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  private users: User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers():void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}