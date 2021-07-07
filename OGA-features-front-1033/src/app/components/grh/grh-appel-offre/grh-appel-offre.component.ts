import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrhAppelOffreService } from '../services/grh-appel-offre.service';

@Component({
  selector: 'app-grh-appel-offre',
  templateUrl: './grh-appel-offre.component.html',
  styleUrls: ['./grh-appel-offre.component.scss']
})
export class GrhAppelOffreComponent implements OnInit {

  id: number;
  reference: string;
  lienSite: string;
  datepost: string;
  description: string;
  dateFin: string;
  status: number;

  constructor(
    private grhAppelOffreService: GrhAppelOffreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params.id);
    
    this.grhAppelOffreService.getAppelsOffre(this.id).subscribe(
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

}
