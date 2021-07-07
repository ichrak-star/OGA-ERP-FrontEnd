import { Component, OnInit } from '@angular/core';
import { GrhAppelOffreService } from '../../grh/services/grh-appel-offre.service';

@Component({
  selector: 'app-admin-historique-appel-offre',
  templateUrl: './admin-historique-appel-offre.component.html',
  styleUrls: ['./admin-historique-appel-offre.component.scss']
})
export class AdminHistoriqueAppelOffreComponent implements OnInit {

  appelsOffres = [];

  constructor(
    private grhAppelOffreService: GrhAppelOffreService
  ) { }

  ngOnInit(): void {
    this.grhAppelOffreService.getAllAppelsOffres().subscribe(
      response => this.appelsOffres = response.reverse(),
      error => console.log(error)
    );
  }

}
