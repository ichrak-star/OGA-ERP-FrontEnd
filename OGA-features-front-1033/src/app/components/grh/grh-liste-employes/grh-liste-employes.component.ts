import { Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup}  from '@angular/forms';
import { GrhEmployesService } from '../services/grh-employes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  selector: 'app-grh-liste-employes',
  templateUrl: './grh-liste-employes.component.html',
  styleUrls: ['./grh-liste-employes.component.scss']
})
export class GrhListeEmployesComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private grhEmployeService : GrhEmployesService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
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

  // For the dialog
  openDialog(employe) {
    this.dialog.open(DialogDataExampleDialog, {
      data: employe
    });
  }
 
}

// Dialog 
@Component({
  selector: 'consulter-employe',
  templateUrl: 'consulter-employe.html',
  styleUrls: ['./consulter-emp.scss']
})
export class DialogDataExampleDialog {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private grhEmployeService: GrhEmployesService
  ) {}

  // for the password
  hide: boolean = true;

  ngOnInit(){
    this.updateCinHidden = true;
    this.grhEmployeService.InfoEmploye(this.data.id).subscribe(
      res => {this.data = res;},
      err => console.log(err)
    )
  }

  updateEmploye(){
    console.log(this.data)
    if(!this.data.nom.trim() || !this.data.prenom.trim() || !this.data.email.trim() || ! this.data.password.trim() || !this.data.telephone){
      this._snackBar.open("Tous les champs doivent etre remplis", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    this.grhEmployeService.updateEmploye(this.data, this.data.id).subscribe(
      response => {
        this._snackBar.open("L'employé "+this.data.id+" a été modifié avec succes", '', {
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
  
  disableEmploye(){
    this.grhEmployeService.disableEmploye(this.data.id).subscribe(
      response => {
        this._snackBar.open("L'employé "+this.data.id+" est maintenant inactif", '', {
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

  // for the  cin:
  updateCinHidden: boolean;
  showUpdateCin(){
    if(!this.updateCinHidden) this.cinUrl = null;
    this.updateCinHidden = !this.updateCinHidden;
  }

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
  
  updateCin(){
    console.log(this.selectedCinIlmage)
    var formData = new FormData();
    formData.set("file", this.selectedCinIlmage);
    this.grhEmployeService.mettreAjourCin(formData, this.data.id).subscribe(
      response => {
        this._snackBar.open("L'image cin de l'employe "+this.data.id+" a été modifiée", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
        this.ngOnInit();
      }, 
      error => console.log(error)
  );
  }


}