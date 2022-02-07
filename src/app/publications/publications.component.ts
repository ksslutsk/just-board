import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications: Publication[] = [];

  constructor(
    private publicationService: PublicationService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getPublications().subscribe(p => this.publications = p);
  }

  update(id: number): void {
    const userId = Number(localStorage.getItem("userId"));
    const pub = _.find(this.publications, function (p) {
      return p.id === id;
    });

    if (userId === pub!.userId) {
      this.router.navigate([`update-publication/${id}`]);
    }
  }

  delete(currPub: Publication): void {
    const userId = Number(localStorage.getItem("userId"));
    const currUser = this.userService.getUser(userId);
    
    if (currUser.isAdmin || userId === currPub.userId) {
      if (confirm(`Do you want to delete post with id: ${currPub.id}?`)) {
        //this.publicationService.delete(currPub.id);
        this.publicationService.deleteHttp(currPub.id).subscribe(() => console.log(`deleted`));
      }
    }
  }
}
