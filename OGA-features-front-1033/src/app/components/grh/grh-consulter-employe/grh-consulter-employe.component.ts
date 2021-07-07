import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GrhEmployesService } from '../services/grh-employes.service';

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
  selector: 'app-grh-consulter-employe',
  templateUrl: './grh-consulter-employe.component.html',
  styleUrls: ['./grh-consulter-employe.component.scss']
})
export class GrhConsulterEmployeComponent implements OnInit {

  hide: boolean = true;

  id: number ;
  employe: Employe = null; 
  
  nom:string;
  prenom:string
  email:string;
  motdepass:string;
  telephone:number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private grhEmployeService : GrhEmployesService,
    private _snackBar: MatSnackBar
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

  imageUri: string;

  ngOnInit(): void {   
    this.route.params.subscribe( params => this.id = params.id);
    // Get user :
    this.grhEmployeService.InfoEmploye(this.id).subscribe(
      response => {
        this.employe = response.user
        this.nom = this.employe.nom;
        this.prenom = this.employe.prenom;
        this.email = this.employe.email;
        this.telephone = this.employe.telephone;
        this.motdepass = this.employe.password;
        this.sexControl = new FormControl(this.employe.sex);
        this.roleControl = new FormControl(this.employe.role);
        this.departementControl = new FormControl(this.employe.departement);
        this.imageUri = this.employe.image;
        this.showUpdateImage = false;
        this.cinUrl = null;
      },
      error => console.log(error)
    );
  }

  updateEmploye(){
    if(!this.nom.trim() || !this.prenom.trim() || !this.email.trim() || ! this.motdepass.trim() || !this.telephone){
      this._snackBar.open("Tous les champs doivent etre rempli", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    if(this.cinUrl){
       this.updateCin();
    }
    // nouvelles informations du l'employé
    let newEmp = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      user_name: this.email,
      password: this.motdepass,
      telephone: this.telephone,
      departement: this.departementControl.value,
      role: this.roleControl.value,
      sex: this.sexControl.value
    }

    this.grhEmployeService.updateEmploye(newEmp, this.id).subscribe(
      response => {
        this._snackBar.open("L'employé "+this.id+" a été modifié avec succes", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
        if(this.cinUrl){
          window.location.reload()
        }else{
          this.ngOnInit();
        }
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

  disableEmploye(id){
    this.grhEmployeService.disableEmploye(id).subscribe(
      response => {
        this._snackBar.open("L'employé "+id+" est maintenant inactif", '', {
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

  // update image:
  showUpdateImage: boolean;
  showUpdateCin(){this.showUpdateImage=!this.showUpdateImage}
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
    var formData = new FormData();
    formData.set("file", this.selectedCinIlmage);
    this.grhEmployeService.mettreAjourCin(formData, this.id).subscribe(
      response => {
        console.log(response)
      }, 
      error => console.log(error)
  );
  }

}
