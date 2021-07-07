import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeQualiteService {

  token: string;
  id: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id');
  }
 
  ajouterRapport(rapport, idProjet) : Observable<any>{ 
    return this.http.post('http://localhost:8080/api/user/'+this.id+'/project/'+idProjet+'/QualityRapport', rapport, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAllRapports() : Observable<any> {
    return this.http.get('http://localhost:8080/api/qualityRapports', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getRapport(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/qualityRapport/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  putRapport(id, rapport) : Observable<any> {
    return this.http.put('http://localhost:8080/api/qualityRapport/'+id, rapport,{headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

}
