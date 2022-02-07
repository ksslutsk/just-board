import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../publication.service';
import { Publication } from '../publication';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
  }

  create(imageUrl: string, textContent: string): void {
/*
    if (!imageUrl && !textContent) {
      alert("fields are empty");
    }
    else {
      const newPublication: Publication = {
        userId: Number(localStorage.getItem("userId")),
        textContent: textContent,
        imageUrl: imageUrl,
        id: this.publicationService.getNewId()
      };

      const currVal = this.publicationService.publications.value;
      const newVal = [newPublication, ...currVal];
      this.publicationService.publications.next(newVal);

      this.goBack();
    }*/
    
    this.createHttp(imageUrl, textContent);
  }
  createHttp(imageUrl: string, textContent: string): void {
    const newPublication = {
      userId: Number(localStorage.getItem("userId")),
      textContent: textContent,
      imageUrl: imageUrl,
    } as Publication;
    this.publicationService.createHttp(newPublication).subscribe(()=> this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
