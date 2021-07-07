import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeStockService } from '../services/employe-stock.service';

@Component({
  selector: 'app-e-produit',
  templateUrl: './e-produit.component.html',
  styleUrls: ['./e-produit.component.scss']
})
export class EProduitComponent implements OnInit {

  id: number;
  title: string;
  descriptionProduct: string;
  weight: string;
  price: number;
  quantity: number;
  role: string;
  departement: string;
  idCategorie: number;
  categorieName: string;

  deleted: boolean;

  constructor(
    private employeStockService: EmployeStockService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    this.departement = localStorage.getItem('departement');

    this.route.params.subscribe( params => this.idCategorie = params.idCategorie);
    this.route.params.subscribe( params => this.id = params.id);
    console.log(this.idCategorie,this.id)
    
    this.employeStockService.getproduit(this.id).subscribe(
      response => {
        console.log(response)
        this.title = response.title
        this.descriptionProduct = response.description;
        this.weight = response.weight;
        this.price = response.price;
        this.quantity = response.quantity;
        this.deleted = false;
      },
      error => {
        console.log(error)
        this.deleted = true;
      }
    );
    this.employeStockService.getCategorie(this.idCategorie).subscribe(
      response => {
        this.categorieName = response.name
      },
      error => console.log(error)
    );
  }
  updateProduit(){
    // nouvelles informations du l'employé
    let newProd = {
      title: this.title,
      description: this.descriptionProduct,
      weight: this.weight,
      price: this.price,
      quantity: this.quantity
    }
    console.log(newProd);

    this.employeStockService.putproduit(this.idCategorie,this.id,newProd).subscribe(
      response => {
        this._snackBar.open("Le produit "+this.id+" a été modifié avec succes", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
          this.ngOnInit();
      }, 
      error => {
        console.log(error);
        this._snackBar.open("Une erreur s'est produit, essayez plus tard", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'errToast'
        });
      }
    );
  }
  deleteProduit(idCategorie,id){
    this.employeStockService.deleteproduit(idCategorie,id).subscribe(
      response => {
        this._snackBar.open("Le produit "+id+" est maintenant supprimer", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
        this.ngOnInit();
      }, 
      error => {
        console.log(error);
        this._snackBar.open("Une erreur s'est produit, essayez plus tard", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'errToast'
        });
      }
    );
  }

}
