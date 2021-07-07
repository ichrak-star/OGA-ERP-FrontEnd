import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeEtudeService {
  token: string;
  id: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id');
  }

  ajouterEtude(etude, idAppelOffre) : Observable<any>{ 
    return this.http.post('http://localhost:8080/api/user/'+this.id+'/appelDoffre/'+idAppelOffre+'/etude', etude, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAllEtudes() : Observable<any> {
    return this.http.get('http://localhost:8080/api/etudes', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getEtude(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/etude/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  putEtude(id, etude) : Observable<any> {
    return this.http.put('http://localhost:8080/api/etude/'+id, etude,{headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

}
