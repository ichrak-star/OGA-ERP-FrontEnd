import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrhAppelOffreService {

  token: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllAppelsOffres() : Observable<any> {
    return this.http.get('http://localhost:8080/api/appelDoffres', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAppelsOffre(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/appelDoffre/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }
  
}
