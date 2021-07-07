import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GrhDemandesService } from '../services/grh-demandes.service';

@Component({
  selector: 'app-grh-demandes',
  templateUrl: './grh-demandes.component.html',
  styleUrls: ['./grh-demandes.component.scss']
})
export class GrhDemandesComponent implements OnInit {

  commentaire:string = '';

  // Demandes
  public selectedVal: "tous" | "attente" | "accepté";

  tous=[];
  attente=[];
  acceptes=[];

  setDemandesAAfficher(){
    if(this.selectedVal==="tous"){
      return this.tous;
    }else if(this.selectedVal==="attente"){
      return this.attente;
    }else{
      return this.acceptes
    }
  }

  demandesAAfficher = this.setDemandesAAfficher(); 

  constructor(
    private grhDemandeService: GrhDemandesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.grhDemandeService.getAllDemandes().subscribe(
      response => this.tous = response.reverse(),
      error => console.log(error)
    );
    this.grhDemandeService.getDemandesEnAttente().subscribe(
      response => this.attente = response.reverse(),
      error => console.log(error)
    );
    this.grhDemandeService.getAcceptedDemandes().subscribe(
      response => this.acceptes = response.reverse(),
      error => console.log(error)
    );
    this.changeVal("tous");
  }

  public changeVal(val) {
    this.selectedVal = val;
    this.demandesAAfficher = this.setDemandesAAfficher();
  }

  consulterEmp(id){
    this.router.navigate(['/grh/employé/'+id]);
  }

  validerDemande(old_demande){
    let demande =  JSON.parse(JSON.stringify(old_demande));
    console.log(demande, demande.id);
    demande.commentaireGrh = this.commentaire;
    demande.status = 1;

    this.grhDemandeService.updateDemande(demande).subscribe(
      response => {
        this._snackBar.open("Success", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 2500,
          panelClass : 'successToast'
        });
        this.ngOnInit();
      },
      error => {
        this._snackBar.open("Essayez plus tard", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 2500,
          panelClass : 'errToast'
        });
      }
    );
  }

  refuserDemande(old_demande){
    let demande =  JSON.parse(JSON.stringify(old_demande));
    console.log(demande, demande.id);
    demande.commentaireGrh = this.commentaire;
    demande.status = 2;

    this.grhDemandeService.updateDemande(demande).subscribe(
      response => {
        this._snackBar.open("Success", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 2500,
          panelClass : 'successToast'
        });
        this.ngOnInit();
      },
      error => {
        this._snackBar.open("Essayez plus tard", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 2500,
          panelClass : 'errToast'
        });
        console.log(error);
      }
    );
  }

}