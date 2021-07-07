import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeStockService {

  token: string;
  constructor(private http : HttpClient) {
    this.token = localStorage.getItem('token');
  }

  ajouterCategorie(categorie) : Observable<any>{ 
    return this.http.post('http://localhost:8080/api/categorie/', categorie, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getAllCategorie() : Observable<any> {
    return this.http.get('http://localhost:8080/api/categories', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getCategorie(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/categorie/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  putCategorie(id, categorie) : Observable<any> {
    return this.http.put('http://localhost:8080/api/categorie/'+id, categorie,{headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }
  deleteCategorie(id): Observable<any> {
    return this.http.delete('http://localhost:8080/api/categorie/'+id,{headers: new HttpHeaders({Authorization: 'Bearer '+this.token})});
  }

  ajouterproduit(id,product) : Observable<any>{
    return this.http.post('http://localhost:8080/api/categorie/'+id+'/product',product,{headers: new HttpHeaders({Authorization:'Bearer '+this.token})});

  }
  getAllproduct(id) : Observable<any> {
    return this.http.get('http://localhost:8080/api/categorie/'+id+'/product', {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }

  getproduit(id): Observable<any>{
    return this.http.get('http://localhost:8080/api/product/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
   }

   putproduit(idCategorie,id,produit): Observable<any>{
     return this.http.put('http://localhost:8080/api/categorie/'+idCategorie+'/product/'+id,produit, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
   }
   deleteproduit(idCategorie,id): Observable<any>{
    return this.http.delete('http://localhost:8080/api/categorie/'+idCategorie+'/product/'+id, {headers: new HttpHeaders({Authorization: 'Bearer '+this.token})} );
  }
}
