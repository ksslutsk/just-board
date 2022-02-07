import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS, defaultPhotoUrl } from './mock-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = USERS;
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private usersUrl = 'api/users';

  constructor(
    private http: HttpClient
  ) { }

  logInUser(username: string, password: string): number {
    const index = this.users.findIndex(user => user.name === username);
    if (index == -1) return -1;
    const user = this.users[index];
    if (user.password !== password) return -1;
    return user.id;
  }

  getNewId(): number {
    const user = _.maxBy(this.users, function (u) {
      return u.id;
    });
    const newId = user!.id + 1;
    return newId;
  }

  getUser(id: number): any {
    const user = _.find(this.users, function (u) {
      return u.id === id;
    });
    return user;
  }

  makeUser(id: number, name: string, password: string): User {
    const newUser: User = { id: id, name: name, password: password, profilePhotoUrl: defaultPhotoUrl, isAdmin: false };
    return newUser;
  }

  searchUser(term: string): User[] {
    if (!term) return [];
    return this.users.filter(user => user.name.includes(term));
  }
}
