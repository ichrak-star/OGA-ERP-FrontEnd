import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrhDemandesService {

  token: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllDemandes() : Observable<any> {
    return this.http.get('http://localhost:8080/api/demandes', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getDemandesEnAttente() : Observable<any> {
    return this.http.get('http://localhost:8080/api/enattentedemandes', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  getAcceptedDemandes() : Observable<any> {
    return this.http.get('http://localhost:8080/api/validedemandes', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  updateDemande(demande) : Observable<any>{
    return this.http.put('http://localhost:8080/api/demande/'+demande.id, demande, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} )
  }

}
