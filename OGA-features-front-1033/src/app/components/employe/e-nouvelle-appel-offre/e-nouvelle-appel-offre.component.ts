import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeAppelOffreService } from '../services/employe-appel-offre.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-e-nouvelle-appel-offre',
  templateUrl: './e-nouvelle-appel-offre.component.html',
  styleUrls: ['./e-nouvelle-appel-offre.component.scss']
})
export class ENouvelleAppelOffreComponent implements OnInit {

  // For the accordion 
  step = 1;
  setStep(index: number) {
    this.step = index;
  }

  dateFin='';
  description='';
  lienSite='';
  reference='';


  constructor(
    private employeAppelOffresService : EmployeAppelOffreService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  creerAppelOffre(){
    if(!this.dateFin.trim() || !this.description.trim() || !this.lienSite.trim() || ! this.reference.trim()){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }

    let timestamp : number = new Date().getTime();

    let appelOffre = {
      reference: this.reference,
      lienSite: this.lienSite,
      description: this.description,
      dateFin: this.dateFin,
      status: 0,
      datepost: formatDate(timestamp,'yyyy-MM-dd', 'en_US')
    }

    this.employeAppelOffresService.ajouterAppelOffre(appelOffre)
    .subscribe(response => {
      this._snackBar.open("Un appel d'offre a été crée avec l'id: "+response.id, '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 3000,
        panelClass : 'successToast'
      });
      this.dateFin='';
      this.description='';
      this.lienSite='';
      this.reference='';
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
