import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrhEmployesService {

  token: string;

  constructor( private http : HttpClient ) {
    this.token = localStorage.getItem('token');
  }

  creerUnEmploye(emp) : Observable<any>{
    return this.http.post('http://localhost:8080/api/user', emp, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }

  updateEmploye(emp, id) : Observable<any>{
    return this.http.put('http://localhost:8080/api/user/'+id, emp, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }

  disableEmploye(id) : Observable<any>{
    return this.http.delete('http://localhost:8080/api/user/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }

  getActifEmployees() : Observable<any> {
    return this.http.get('http://localhost:8080/api/actifusers', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getDisabledEmployees() : Observable<any> {
    return this.http.get('http://localhost:8080/api/disabledusers', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  InfoEmploye(id) : Observable<any>{
    return this.http.get('http://localhost:8080/api/user/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  mettreAjourCin(cin, id) : Observable<any>{
    return this.http.put('http://localhost:8080/api/user/'+id+'/updateCin', cin, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }

}