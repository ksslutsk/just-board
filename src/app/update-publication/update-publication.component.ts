import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PublicationService } from '../publication.service';
import { Publication } from '../publication';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {

  @Input() publication?: Publication;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.getPublication();
  }

  save(imageUrl: string, textContent: string): void{
    
   // this.publicationService.update(this.publication!.id, imageUrl, textContent);
   // this.cancel();
   this.saveUrl();
  }
  
  saveUrl(): void {
    if(!this.publication) return;
    this.publicationService.updateHttp(this.publication).subscribe(() => this.cancel());
  }

  cancel(): void{
    this.location.back();
  }
  
  getPublication(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.publicationService.getPublication(id).subscribe(p => this.publication = p );
  }
}
