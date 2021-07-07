import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeAppelOffreService } from '../services/employe-appel-offre.service';

@Component({
  selector: 'app-e-appel-offre',
  templateUrl: './e-appel-offre.component.html',
  styleUrls: ['./e-appel-offre.component.scss']
})
export class EAppelOffreComponent implements OnInit {

  id: number;
  reference: string;
  lienSite: string;
  datepost: string;
  description: string;
  dateFin: string;
  status: number;

  role: string;
  departement: string;

  constructor(
    private employeAppelOffreService: EmployeAppelOffreService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    this.departement = localStorage.getItem('departement');

    this.route.params.subscribe( params => this.id = params.id);
    
    this.employeAppelOffreService.getAppelsOffre(this.id).subscribe(
      response => {
        this.reference = response.reference
        this.lienSite = response.lienSite;
        this.datepost = response.datepost;
        this.description = response.description;
        this.dateFin = response.dateFin;
        this.status = response.status;
      },
      error => console.log(error)
    );
  }

  valider(){
    let newAppelOffre = {
      reference: this.reference,
      lienSite: this.lienSite,
      datepost: this.datepost,
      description: this.description,
      dateFin: this.dateFin,
      status: 1
    }
    this.employeAppelOffreService.putAppelOffre(this.id, newAppelOffre).subscribe(
      response => {
        this._snackBar.open("L'appel doffre "+this.id+", avec la reference ( "+this.reference+" ) a été validé", '', {
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
    let newAppelOffre = {
      reference: this.reference,
      lienSite: this.lienSite,
      datepost: this.datepost,
      description: this.description,
      dateFin: this.dateFin,
      status: 2
    }
    this.employeAppelOffreService.putAppelOffre(this.id, newAppelOffre).subscribe(
      response => {
        this._snackBar.open("L'appel doffre "+this.id+", avec la reference ( "+this.reference+" ) a été refusé", '', {
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
