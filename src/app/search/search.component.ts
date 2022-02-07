import { Component, OnInit } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  usersToShow!: User[][];
  defaultUsers!: User[]; //показуємо коли ніц не шукається
  currentPage: number = 0;

  private searchTerms = new Subject<string>();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.defaultUsers = this.userService.users.slice(0, 5);
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => of(this.userService.searchUser(term)))
    ).subscribe(
      users => { this.usersToShow = _.chunk(users, 5); }
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  showSearchResult(searchUserId: number): void {
    this.router.navigate([`search-result/${searchUserId}`]);
  }

  changePage(step: number) {
    if (step === 1) {
      if (this.currentPage < this.usersToShow.length - 1) this.currentPage++;
    }
    else {
      if (this.currentPage > 0) this.currentPage--;
    }
  }

}
