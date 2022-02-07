import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() user?: User;

  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  saveUsername(username: string): void {
    if(!username){
      alert("Empty username");
      return;
    }
    this.userService.users.filter( user => user.id === this.user?.id)[0].name = username;
  }

  saveProfilePhoto(imgUrl: string): void {
    if(!imgUrl){
      alert("Empty photo");
      return;
    }
    this.userService.users.filter( user => user.id === this.user?.id)[0].profilePhotoUrl = imgUrl;
  }

  saveNewPassword(oldPass: string, newPass: string, confPass: string): void {
    if( oldPass!== this.user?.password){
      alert("Incorrect old pasword!");
      return;
    }
    if(!newPass){
      alert("Empty new password field");
      return;
    }
    if(newPass !== confPass){
      alert("Incorrect password for confirm");
      return;
    }
    this.userService.users.filter( user => user.id === this.user?.id)[0].password = newPass;
  }

  cancel(): void {
    this.location.back();
  }

  getUser(): void {
    this.user = this.userService.getUser(Number(localStorage.getItem("userId")));
  }

}
