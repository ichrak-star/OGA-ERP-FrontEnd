import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProjetsService {

  token: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
  }

  ajouterProjet(projet, id) : Observable<any>{ 
    return this.http.post('http://localhost:8080/api/project/'+id, projet, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAllProjets() : Observable<any> {
    return this.http.get('http://localhost:8080/api/project', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getProjet(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/project/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  putProjet(id, projet) : Observable<any> {
    return this.http.put('http://localhost:8080/api/project/'+id, projet,{headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  deleteProject(id){
    return this.http.delete('http://localhost:8080/api/project/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})})
  }

  getAllChefsProjets() : Observable<any> {
    return this.http.get('http://localhost:8080/api/allChefDeProjet', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  gettNonAffectedProjects(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/nonAffectedUsersToProject/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  ajouterEmploye(id, employes) : Observable<any> {
    return this.http.post('http://localhost:8080/api/project/'+id+'/users', employes, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  ajouterTache(idProjet, tache) : Observable<any> {
    return this.http.post('http://localhost:8080/api/projet/'+idProjet+'/tache', tache, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  deleteUserFromProject(idProjet, idUser) : Observable<any> {
    return this.http.delete('http://localhost:8080/api/projet/'+idProjet+'/user/'+idUser,  {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  getuserNonAffecteAutache(idTache) : Observable <any> {
    return this.http.get('http://localhost:8080/api/nonAffectedUsersToTache/'+idTache, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})})
  }

  getTacheById(idTache) : Observable <any> {
    return this.http.get('http://localhost:8080/api/tache/'+idTache, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})})
  }

  ajouterEmployesAuTache(idTache, users) : Observable <any> {
    return this.http.post('http://localhost:8080/api/tache/'+idTache+'/users', users, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  deleteUserFromTache(idTache, idUser) : Observable<any> {
    return this.http.delete('http://localhost:8080/api/tache/'+idTache+'/user/'+idUser,  {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }
}
