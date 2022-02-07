import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { PUBLICATIONS } from './mock-publications'//мабуть не треба буде
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  publications: BehaviorSubject<Publication[]> = new BehaviorSubject<Publication[]>(PUBLICATIONS);
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private publicationsUrl = 'api/publications';

  constructor(
    private http: HttpClient
  ) { }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.publicationsUrl);
  }

  getNewId(): number {
    const pubs = this.publications.value;
    const newId = _.maxBy(pubs, 'id');
    return newId!.id + 1;
  }

  /*
  delete(id: number): void {
    _.remove(this.publications.value, function (p) {
      return p.id === id;
    });
  }

  getPublication(id: number): Observable<Publication> {
    const url = `${this.publicationsUrl}/${id}`;
    return this.http.get<Publication>(url);
  }

  update(pubId: number, imageUrl: string, textContent: string): void {
    const index = Number(_.findIndex(this.publications.value, function (p) {
      return p.id === pubId;
    }));
    this.publications.value[index].imageUrl = imageUrl;
    this.publications.value[index].textContent = textContent;
  }
*/

  deleteHttp(id: number): Observable<Publication>{
    const url = `${this.publicationsUrl}/${id}`;
    return this.http.delete<Publication>(url, this.httpOptions);
  }
  updateHttp(publication: Publication): Observable<any>{
    return this.http.put(this.publicationsUrl, publication, this.httpOptions);
  }
  createHttp(pub: Publication): Observable<any>{
    return this.http.post<Publication>(this.publicationsUrl, pub, this.httpOptions);
  }
}
