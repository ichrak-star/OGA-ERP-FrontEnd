import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup}  from '@angular/forms';
import { GrhEmployesService } from '../../grh/services/grh-employes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Employe {
  id: number,
  nom: string,
  prenom: string,
  email: string,
  password: string,
  imageFile: string,
  image: string,
  telephone: number,
  disabled: boolean,
  departement: string,
  sex: string,
  role: string,
  demandes:[]
}

@Component({
  selector: 'app-admin-liste-employes',
  templateUrl: './admin-liste-employes.component.html',
  styleUrls: ['./admin-liste-employes.component.scss']
})
export class AdminListeEmployesComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private grhEmployeService : GrhEmployesService,
    private _snackBar: MatSnackBar,
    ) {
    this.options = fb.group({
      color: this.colorControl,
      sex: this.sexControl,
      role: this.roleControl,
      departement: this.departementControl,
    });
  }

  // For the dropdowns
  form: FormGroup = new FormGroup({});
  options: FormGroup;
  colorControl = new FormControl('primary');
  sexControl = new FormControl('Male');
  roleControl = new FormControl('Employe');
  departementControl = new FormControl('It');
  
  // For the accordion 
  step = 1;
  setStep(index: number) {
    this.step = index;
  }

  // For the image upload
  cinUrl = null;
  selectedCinIlmage : File;
  onFileSelected(event){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.cinUrl = reader.result; 
		}
    this.selectedCinIlmage = event.target.files[0];
  }

  // Form variables
  nom: string;
  prenom: string;
  email: string;
  motdepass: string;
  telephone: number;

  // Creation employé
  creerEmploye(){
  if(!this.nom.trim() || !this.prenom.trim() || !this.email.trim() || ! this.motdepass.trim() || !this.telephone){
    this._snackBar.open("Vous devez remplir tous les champs", '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration : 2500,
      panelClass : 'errToast'
    });
    return;
  }
  if(!this.selectedCinIlmage){
    this._snackBar.open("Vous devez ajouter une image de CIN", '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration : 2500,
      panelClass : 'errToast'
    });
    return;
  }

  // Creation nouveau compte employé
  var formData = new FormData();
  formData.set("nom", this.nom);
  formData.set("prenom", this.prenom);
  formData.set("email", this.email);
  formData.set("password", this.motdepass);
  formData.set("telephone", this.telephone.toString());
  formData.set("sex", this.sexControl.value);
  formData.set("departement", this.departementControl.value);
  formData.set("role", this.roleControl.value);
  formData.set("file", this.selectedCinIlmage);

  this.grhEmployeService.creerUnEmploye(formData).subscribe(
      response => {
        this._snackBar.open("Vous avez ajouter un nouveau employé avec l'id: "+response.user.id, '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
        // supprimer les entrées:
        this.nom = '';
        this.prenom = '';
        // ajouter les nouveaux utilisateurs à la table:
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

  // For toggle
  toggleChecked: Boolean = true;


  // For table
  actifEmployes: Employe[] = []
  disabledEmployes: Employe[] = []
  
  

  ngOnInit(): void {
    // Get actif and disabled users :
    this.grhEmployeService.getActifEmployees().subscribe(
      response => this.actifEmployes = response,
      error => console.log(error)
    );
    this.grhEmployeService.getDisabledEmployees().subscribe(
      response => this.disabledEmployes = response,
      error => console.log(error)
    );
    // suprimmer les entrées de form de creation apres refresh
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.motdepass = "";
    this.telephone = null;
    this.cinUrl = null;
    this.selectedCinIlmage = null;
  }

}
