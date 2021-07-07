import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminProjetsService } from '../services/admin-projets.service';

@Component({
  selector: 'app-admin-projets',
  templateUrl: './admin-projets.component.html',
  styleUrls: ['./admin-projets.component.scss']
})
export class AdminProjetsComponent implements OnInit {

  projets = []  ;

  constructor(
    private adminProjectService: AdminProjetsService,
    private _snackBar: MatSnackBar,
  ) { }

  // chefs de projet drop down
  chefsDeProjets;
  form: FormGroup = new FormGroup({});
  options: FormGroup;
  chefControl = new FormControl('');

  ngOnInit(): void {
    this.dateDebut = undefined;
    this.titre='';
    this.description='';
    this.adminProjectService.getAllProjets().subscribe(
      response => {this.projets = response.reverse(); console.log(this.projets)},
      error => console.log(error)
    );
    this.adminProjectService.getAllChefsProjets().subscribe(
      response => this.chefsDeProjets = response,
      err => console.log(err)    
    );
  }

  // For the accordion 
  step = 1;
  setStep(index: number) {
    this.step = index;
  }

  titre: string;
  description: string;
  dateDebut;
  
  ajouterProjet(){
    this.dateDebut = formatDate(this.dateDebut,'yyyy-MM-dd', 'en_US');
    if(!this.titre.trim() || !this.description.trim() || !this.dateDebut ){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }

    let projet = {
      title: this.titre,
      description: this.description,
      dateDebut: this.dateDebut,
    }

    this.adminProjectService.ajouterProjet(projet, this.chefControl.value.id)
    .subscribe(response => {
      this._snackBar.open("Un projet a été ajouté avec l'id: "+response.id, '', {
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
