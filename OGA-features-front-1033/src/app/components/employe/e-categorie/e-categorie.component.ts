import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeStockService } from '../services/employe-stock.service';

@Component({
  selector: 'app-e-categorie',
  templateUrl: './e-categorie.component.html',
  styleUrls: ['./e-categorie.component.scss']
})
export class ECategorieComponent implements OnInit {
  deleted: boolean;

  // For the accordion 
  step = 1;
  setStep(index: number) {
    this.step = index;
  }

  products:[];
  /*for product*/ 
  idProduct:number;
  title: string;
  descriptionProduct: string;
  weight: string;
  price: number;
  quantity: number;
  /*for category*/
  id: number;
  name: string;
  description: string;

  role: string;
  departement: string;

  constructor(private employeStockService: EmployeStockService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.departement = localStorage.getItem('departement');

    this.route.params.subscribe( params => this.id = params.id);
    
    this.employeStockService.getCategorie(this.id).subscribe(
      response => {
        this.name = response.name
        this.description = response.description;
        this.deleted = false;
      },
      error => {
        console.log(error)
        this.deleted = true;
      }
    );
     // Get all  :
     this.employeStockService.getAllproduct(this.id).subscribe(
      response => this.products = response,
      error => console.log(error)
    );
  }

  creerProduit(){
    // nouvelles informations du produit
    let newprod = {
      title: this.title,
      description: this.descriptionProduct,
      weight: this.weight,
      price: this.price,
      quantity: this.quantity

      
    }
    this.employeStockService.ajouterproduit(this.id,newprod).subscribe(
      Response => {
        this._snackBar.open("Le produit "+this.idProduct+" a été crée avec succes", '', {
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
  updateCategorie(){
    if(!this.name.trim() || !this.description.trim()){
      this._snackBar.open("Tous les champs doivent etre rempli", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    // nouvelles informations du l'employé
    let newCat = {
      name: this.name,
      description: this.description,
      
    }

    this.employeStockService.putCategorie(this.id,newCat).subscribe(
      response => {
        this._snackBar.open("La Catégorie "+this.id+" a été modifié avec succes", '', {
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
  deleteCategorie(id){
    this.employeStockService.deleteCategorie(id).subscribe(
      response => {
        this._snackBar.open("La Catégorie "+id+" est maintenant supprimer", '', {
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
