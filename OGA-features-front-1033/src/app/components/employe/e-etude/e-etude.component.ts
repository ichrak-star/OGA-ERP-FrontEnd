import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeEtudeService } from '../services/employe-etude.service';

@Component({
  selector: 'app-e-etude',
  templateUrl: './e-etude.component.html',
  styleUrls: ['./e-etude.component.scss']
})
export class EEtudeComponent implements OnInit {

  id: number;
  referenceProjet: string;
  titre: string;
  datepost: string;
  description: string;
  status: number;
  creator: string;
  lienDocumet: string;
  appelDoffreRef: string;
  creatorId: string;

  role: string;
  departement: string;

  constructor(
    private employeEtudeService: EmployeEtudeService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.departement = localStorage.getItem('departement');

    this.route.params.subscribe( params => this.id = params.id);

    this.employeEtudeService.getEtude(this.id).subscribe(
      response => {
        this.creator = response.userEntity.prenom + ' ' + response.userEntity.nom
        this.referenceProjet = response.referenceProjet;
        this.datepost = response.datepost;
        this.description = response.description;
        this.titre = response.titre;
        this.status = response.status;
        this.appelDoffreRef = response.appelDoffre.reference;
        this.lienDocumet = response.imageUri;
        this.creatorId = response.userEntity.id;
      },
      error => console.log(error)
    );
  }

  update(){
    let newetude = {
      referenceProjet: this.referenceProjet,
      titre: this.titre,
      datepost: this.datepost,
      description: this.description,
      status: this.status
    }
    this.employeEtudeService.putEtude(this.id, newetude).subscribe(
      response => {
        this._snackBar.open("L'appel doffre "+this.id+" a été mis à jour", '', {
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

  valider(){
    let newetude = {
      referenceProjet: this.referenceProjet,
      titre: this.titre,
      datepost: this.datepost,
      description: this.description,
      status: 1
    }
    this.employeEtudeService.putEtude(this.id, newetude).subscribe(
      response => {
        this._snackBar.open("L'appel doffre "+this.id+" a été validé", '', {
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

  refuser(){
    let newetude = {
      referenceProjet: this.referenceProjet,
      titre: this.titre,
      datepost: this.datepost,
      description: this.description,
      status: 2
    }
    this.employeEtudeService.putEtude(this.id, newetude).subscribe(
      response => {
        this._snackBar.open("L'appel doffre "+this.id+" a été réfusé", '', {
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