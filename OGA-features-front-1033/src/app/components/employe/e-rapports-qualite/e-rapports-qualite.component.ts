import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminProjetsService } from '../../admin/services/admin-projets.service';
import { EmployeQualiteService } from '../services/employe-qualite.service';

@Component({
  selector: 'app-e-rapports-qualite',
  templateUrl: './e-rapports-qualite.component.html',
  styleUrls: ['./e-rapports-qualite.component.scss']
})
export class ERapportsQualiteComponent implements OnInit {

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
  projetControl = new FormControl('');

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
    private employeQualiteService: EmployeQualiteService,
    private _snackBar: MatSnackBar,
    private adminProjectsService: AdminProjetsService
  ) { }

  rapports = [];
  projets;

  departement: string;
  ngOnInit(): void {
    this.departement = localStorage.getItem('departement');
    
    this.employeQualiteService.getAllRapports().subscribe(
      response => this.rapports = response.reverse(),
      error => console.log(error)
    );

    this.adminProjectsService.getAllProjets().subscribe(
      response => this.projets = response.reverse(),
      error => console.log(error)
    );
    
    this.description='';
    this.titre='';
    this.reference='';
  }

  creerRapport(){
    if(!this.description.trim() || !this.titre.trim() || !this.reference.trim() || this.projetControl.value===''){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    if(!this.selectedDoc){
      this._snackBar.open("Vous devez ajouter le document du rapport", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    

    var formData = new FormData();
    formData.set("projectReference", this.reference);
    formData.set("title", this.titre);
    formData.set("description", this.description);
    formData.set("file", this.selectedDoc);


    this.employeQualiteService.ajouterRapport(formData, this.projetControl.value)
    .subscribe(response => {
      console.log(response)
      this._snackBar.open("Un rapport de qualité a été crée avec l'id: "+response.qualityEntity.id, '', {
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
