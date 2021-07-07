import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeQualiteService } from '../services/employe-qualite.service';

@Component({
  selector: 'app-e-rapport-qualite',
  templateUrl: './e-rapport-qualite.component.html',
  styleUrls: ['./e-rapport-qualite.component.scss']
})
export class ERapportQualiteComponent implements OnInit {

  id: number;
  projecttitle: string;
  reference: string;

  titre: string;
  description: string;
  creator: string;
  lienDocumet: string;
  projectRef: string;
  creatorId: string;

  role: string;
  departement: string

  constructor(
    private employeQualiteService: EmployeQualiteService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  rapportExist: boolean = false;

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.departement = localStorage.getItem('departement');

    this.route.params.subscribe( params => this.id = params.id);

    this.employeQualiteService.getRapport(this.id).subscribe(
      response => {
        this.rapportExist = true;
        this.creator = response.userEntity.prenom + ' ' + response.userEntity.nom
        this.description = response.description;
        this.titre = response.title;
        this.lienDocumet = response.imageUri;
        this.creatorId = response.userEntity.id;
        this.projecttitle = response.projectTitle;
        this.reference = response.projectReference;
      },
      error => {console.log(error); this.rapportExist=false;}
    );

  }

  update(){
    let projet = {
      projectReference: this.reference,
      title: this.titre,
      description: this.description,
    }

    this.employeQualiteService.putRapport(this.id, projet).subscribe(
      response => {
        this._snackBar.open("Le rapport avec l'id "+this.id+" a été mis à jour", '', {
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

  supprimer(){
    // TODO: 
    this._snackBar.open("To do !", '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration : 1000,
    });
  }

}