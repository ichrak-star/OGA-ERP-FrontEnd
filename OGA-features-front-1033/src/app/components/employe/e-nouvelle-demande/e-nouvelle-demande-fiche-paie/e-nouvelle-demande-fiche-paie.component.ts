import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeDemandesService } from '../../services/employe-demandes.service';

@Component({
  selector: 'app-e-nouvelle-demande-fiche-paie',
  templateUrl: './e-nouvelle-demande-fiche-paie.component.html',
  styleUrls: ['./e-nouvelle-demande-fiche-paie.component.scss']
})
export class ENouvelleDemandeFichePaieComponent implements OnInit {

  raison: string ;
  commentaire: string ;
  mois: string;
  idEmployé;

  constructor(
    private _snackBar: MatSnackBar,
    private employeDemandeService: EmployeDemandesService
  ) { }

  ngOnInit(): void {
    this.idEmployé = localStorage.getItem('id');
    this.raison='';
    this.commentaire='';
    this.mois ='';
  }

  creerDemande(){
    // control
    if(!this.raison.trim() || !this.commentaire.trim() || !this.mois.trim()){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    // creation demande
    let timestamp : number = new Date().getTime();
    let demande = {
      "type" : "FICHE_PAIE",
      "info":	'Pour le(s) mois(s) : '+this.mois,
      "status":	0,
      "idEmploye":	this.idEmployé,
      "raison":	this.raison,
      "dateCreation":	timestamp,
      "commentaireEmploye":	this.commentaire,
      "idGrh":	null,
      "commentaireGrh":	"",
      "dateReponse":	null,
      "dateDebut": null,
      "dateFin": null
    }

    this.employeDemandeService.ajouterDemande(demande)
    .subscribe(response => {
      this._snackBar.open("Votre demande a été crée avec l'id: "+response.id, '', {
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
