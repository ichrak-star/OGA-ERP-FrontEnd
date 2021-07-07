import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeDemandesService } from '../../services/employe-demandes.service';

@Component({
  selector: 'app-e-nouvelle-demande-conge',
  templateUrl: './e-nouvelle-demande-conge.component.html',
  styleUrls: ['./e-nouvelle-demande-conge.component.scss']
})
export class ENouvelleDemandeCongeComponent implements OnInit {

  raison: string = "";
  commentaire: string = "";
  dateDebut;
  dateFin;
  idEmployé;

  constructor(
    private _snackBar: MatSnackBar,
    private employeDemandeService: EmployeDemandesService
  ) { }

  ngOnInit(): void {
    this.idEmployé = localStorage.getItem('id');
    this.raison='';
    this.commentaire='';
  }

  creerDemande(){
    // control
    if(!this.dateDebut || !this.dateFin){
      this._snackBar.open("Vous devez préciser la période du congé", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    if(formatDate(new Date(),'yyyy-MM-dd', 'en_US') >= formatDate(this.dateDebut,'yyyy-MM-dd', 'en_US')){
      this._snackBar.open("Votre congé ne peut pas commencer avant demain", '', {
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
      "type" : "CONGE",
      "info":	'Période de : '+formatDate(this.dateDebut,'yyyy-MM-dd', 'en_US')+' à : '+formatDate(this.dateFin,'yyyy-MM-dd', 'en_US'),
      "status":	0,
      "idEmploye":	this.idEmployé,
      "raison":	this.raison,
      "dateCreation":	timestamp,
      "commentaireEmploye":	this.commentaire,
      "idGrh":	null,
      "commentaireGrh":	"",
      "dateReponse":	null,
      "dateDebut": formatDate(this.dateDebut,'yyyy-MM-dd', 'en_US'),
      "dateFin": formatDate(this.dateFin,'yyyy-MM-dd', 'en_US')
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
