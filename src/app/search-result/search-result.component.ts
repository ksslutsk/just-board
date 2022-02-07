import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication'
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../publication.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  publications: Publication[] = [];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.getPublications()
  }

  getPublications(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.publications = _.filter(this.publicationService.publications.value, function (p) {
      return p.userId === id;
    });
  }


}
