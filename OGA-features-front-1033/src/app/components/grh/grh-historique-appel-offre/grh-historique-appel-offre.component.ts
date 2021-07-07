import { Component, OnInit } from '@angular/core';
import { GrhAppelOffreService } from '../services/grh-appel-offre.service';

@Component({
  selector: 'app-grh-historique-appel-offre',
  templateUrl: './grh-historique-appel-offre.component.html',
  styleUrls: ['./grh-historique-appel-offre.component.scss']
})
export class GrhHistoriqueAppelOffreComponent implements OnInit {

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
