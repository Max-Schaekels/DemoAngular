import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../core/services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo6',
  imports: [RouterLink],
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component implements OnInit {

  //injections 
  private _userService : UserService = inject(UserService);


  userList : User[] = [];

  ngOnInit(): void {
    this.userList = this._userService.getAll(); 
  }

}
