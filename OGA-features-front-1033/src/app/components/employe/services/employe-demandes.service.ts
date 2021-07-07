import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class EmployeDemandesService {

  token: string;
  id: string;
  constructor(private http : HttpClient) { 
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id');
  }

  ajouterDemande(demande) : Observable<any>{ 
    return this.http.post('http://localhost:8080/api/user/'+this.id+'/demande', demande, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAllDemandes() : Observable<any> {
    return this.http.get('http://localhost:8080/api/listedemandesemployee/'+this.id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getDemandesEnAttente() : Observable<any> {
    return this.http.get('http://localhost:8080/api/listedemandesemployeeenattente/'+this.id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }
  
  getAcceptedDemandes() : Observable<any> {
    return this.http.get('http://localhost:8080/api/listedemandesemployeevalider/'+this.id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

}
