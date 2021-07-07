import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EProfilService {
  token: string;
  id;
  constructor( private http : HttpClient ) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id');
  }

  updateEmploye(emp) : Observable<any>{
    return this.http.put('http://localhost:8080/api/user/'+this.id, emp, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }

  getInfoEmploye() : Observable<any>{
    return this.http.get('http://localhost:8080/api/user/'+this.id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  mettreAjourPhotoDeProfil(nouvellePhotoDeProfil) : Observable<any>{
    return this.http.put('http://localhost:8080/api/user/'+this.id+'/updateProfileImage', nouvellePhotoDeProfil, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }
}