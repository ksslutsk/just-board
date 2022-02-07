import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-board-profile',
  templateUrl: './board-profile.component.html',
  styleUrls: ['./board-profile.component.css']
})
export class BoardProfileComponent implements OnInit {

  @Input() user?: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  createPublication(): void {
    this.router.navigate(['create-publication'])
  }

  editProfile(): void {
    this.router.navigate(['/settings'])
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
  
  getUser(): void {
    this.user = this.userService.getUser(Number(localStorage.getItem("userId")));
  }
}
