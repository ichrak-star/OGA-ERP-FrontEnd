import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeAppelOffreService {

  token: string;
  id: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id');
  }

  ajouterAppelOffre(appelOffre) : Observable<any>{ 
    return this.http.post('http://localhost:8080/api/user/'+this.id+'/appelDoffre', appelOffre, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAllAppelsOffres() : Observable<any> {
    return this.http.get('http://localhost:8080/api/appelDoffres', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAppelsOffre(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/appelDoffre/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  putAppelOffre(id, appelOffre) : Observable<any> {
    return this.http.put('http://localhost:8080/api/appelDoffre/'+id, appelOffre,{headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

}
