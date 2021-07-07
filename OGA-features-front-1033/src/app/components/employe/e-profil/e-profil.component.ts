import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EProfilService } from '../services/e-profil.service';

@Component({
  selector: 'app-e-profil',
  templateUrl: './e-profil.component.html',
  styleUrls: ['./e-profil.component.scss']
})
export class EProfilComponent implements OnInit {

  constructor(
    private eProfilService : EProfilService,
    private _snackBar: MatSnackBar
  ) { }

  employe;
  imageDeProfil;
  imageCin;
  hide = true;

  ngOnInit(): void {
    this.showUpdateImage = false;
    this.imageUrl = null;
    this.eProfilService.getInfoEmploye().subscribe(
      response => {
        console.log(response)
        this.employe = response;
        this.imageDeProfil = this.employe.profileImage;
        this.imageCin = response.imageUri;
      },
      err => console.log(err)
    )
  }

  updatePassword(){
    this.eProfilService.updateEmploye(this.employe).subscribe(
      res => {
        this._snackBar.open("Votre mot de pass a été modifié avec succes", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
        this.ngOnInit;
      },
      err => console.log(err)
    );
  }

  // update profile de profil
  showUpdateImage: boolean;
  showUpdatePhoto(){
    this.showUpdateImage = true;
  }

  imageUrl = null;
  selectedIlmage : File;

  onFileSelected(event){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.imageUrl = reader.result; 
		}
    this.selectedIlmage = event.target.files[0];
  }
  
  updateProfileImage(){
    var formData = new FormData();
    formData.set("file", this.selectedIlmage);
    this.eProfilService.mettreAjourPhotoDeProfil(formData).subscribe(
      response => {
        this._snackBar.open("Votre photo de profile a été modifié avec succes", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'successToast'
        });
        this.ngOnInit();
      }, 
      error => {
        this._snackBar.open("Une erreur s'es produit, essayer plus tard", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 3000,
          panelClass : 'errToast'
        });
        console.log(error);
      }
    );
  }

}
