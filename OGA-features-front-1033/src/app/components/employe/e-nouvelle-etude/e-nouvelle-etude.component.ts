import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeEtudeService } from '../services/employe-etude.service';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeAppelOffreService } from '../services/employe-appel-offre.service';

@Component({
  selector: 'app-e-nouvelle-etude',
  templateUrl: './e-nouvelle-etude.component.html',
  styleUrls: ['./e-nouvelle-etude.component.scss']
})
export class ENouvelleEtudeComponent implements OnInit {

  // For the accordion 
  step = 1;
  setStep(index: number) {
    this.step = index;
  }

  description: string;
  titre: string;
  reference: string;

  // For the drop down :
  form: FormGroup = new FormGroup({});
  options: FormGroup;
  appelDoffreControl = new FormControl('');

  // For document upload
  docUrl = null;
  selectedDoc : File;
  onFileSelected(event){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.docUrl = reader.result; 
		}
    this.selectedDoc = event.target.files[0];
  }

  constructor(
    private employeEtudeService : EmployeEtudeService,
    private _snackBar: MatSnackBar,
    private employeAppelOffreService: EmployeAppelOffreService
  ) { }

  appelsDoffres;

  ngOnInit(): void {
    this.employeAppelOffreService.getAllAppelsOffres().subscribe(
      response => this.appelsDoffres = response.reverse(),
      error => console.log(error)
    );
    
    this.description='';
    this.titre='';
    this.reference='';
  }

  creerEtude(){
    if(!this.description.trim() || !this.titre.trim() || !this.reference.trim() || this.appelDoffreControl.value===''){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    if(!this.selectedDoc){
      this._snackBar.open("Vous devez ajouter le document de l'etude", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    
    let timestamp : number = new Date().getTime();

    var formData = new FormData();
    formData.set("referenceProjet", this.reference);
    formData.set("titre", this.titre);
    formData.set("description", this.description);
    formData.set("status", '0');
    formData.set("datepost", formatDate(timestamp,'yyyy-MM-dd', 'en_US'));
    formData.set("file", this.selectedDoc);


    this.employeEtudeService.ajouterEtude(formData, this.appelDoffreControl.value)
    .subscribe(response => {
      this._snackBar.open("Votre étude a été crée avec l'id: "+response.etudeEntity.id, '', {
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
