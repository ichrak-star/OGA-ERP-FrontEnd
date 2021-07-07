import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeStockService } from '../services/employe-stock.service';

@Component({
  selector: 'app-e-categories',
  templateUrl: './e-categories.component.html',
  styleUrls: ['./e-categories.component.scss']
})
export class ECategoriesComponent implements OnInit {

  categories = []  ;

  constructor(
    private employeStockService: EmployeStockService,
    private _snackBar: MatSnackBar,
  ) { }

  adminUi : string;

  ngOnInit(): void {
    this.adminUi = localStorage.getItem('departement')
    this.name='';
    this.description='';
    this.employeStockService.getAllCategorie().subscribe(
      response => this.categories = response.reverse(),
      error => console.log(error)
    );
  }

  // For the accordion 
  step = 1;
  setStep(index: number) {
    this.step = index;
  }
  name: string;
  description: string;
  
  creerAppelOffre(){
    if(!this.name.trim() || !this.description.trim() ){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }

    let categorie = {
      name: this.name,
      description: this.description,
    }

    this.employeStockService.ajouterCategorie(categorie)
    .subscribe(response => {
      this._snackBar.open("Un appel d'offre a été crée avec l'id: "+response.id, '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 3000,
        panelClass : 'successToast'
      });
      this.ngOnInit();
    }, error => {
      this._snackBar.open("Une erreur s'es produit, essayer plus tard", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 3000,
        panelClass : 'errToast'
      });
      console.log(error);
    })

  }

}
