import { Component, OnInit } from '@angular/core';
import { EmployeAppelOffreService } from '../services/employe-appel-offre.service';

@Component({
  selector: 'app-e-historique-appesl-offres',
  templateUrl: './e-historique-appesl-offres.component.html',
  styleUrls: ['./e-historique-appesl-offres.component.scss']
})
export class EHistoriqueAppeslOffresComponent implements OnInit {

  appelsOffres = []

  constructor(
    private employeAppelOffreService: EmployeAppelOffreService
  ) { }

  ngOnInit(): void {
    this.employeAppelOffreService.getAllAppelsOffres().subscribe(
      response => this.appelsOffres = response.reverse(),
      error => console.log(error)
    );
  }

}
