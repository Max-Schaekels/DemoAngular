import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userList: User[] = [{ id: 1, firstName: 'Anne', lastName: 'Onyme', birthDate: '2001-04-04', credits: 404, email: 'anne.onyme@mousse.be', password: 'Test1234=', role: 'Admin' },
  { id: 2, firstName: 'John', lastName: 'Duff', birthDate: '1981-11-25', credits: 3, email: 'john.duff@poule.be', password: '44471Oeuf=', role: 'User' }];
  constructor() { }

  getAll() : User[] {
    return this._userList;
  }
  add(user : User) : void{
    user.id = Math.max(...this._userList.map(user => user.id)) +1 ;

    this._userList.push(user);
  }
}
