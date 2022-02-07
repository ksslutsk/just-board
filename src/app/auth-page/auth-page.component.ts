import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  registerUser: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(username: string, password: string, confpassword: string): void {
    if(!this.registerUser){
      let id: number = this.userService.logInUser(username, password); 
      if(id != -1)
      {
        localStorage.setItem("userId", `${id}`);
        this.router.navigate(['/board']);
      }
    }
    else {
      if(password === confpassword)
      {
        let newUser: User = this.userService.makeUser( this.userService.getNewId(), username, password );
        this.userService.users.unshift(newUser);
      }
      else { alert("passwords do not match"); }
      this.router.navigate(['/auth']);
    }
  }

  checkRegister(state: boolean): void {
    this.registerUser = state;
  }
}
