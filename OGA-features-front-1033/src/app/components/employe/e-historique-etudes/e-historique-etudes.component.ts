import { Component, OnInit } from '@angular/core';
import { EmployeEtudeService } from '../services/employe-etude.service';

@Component({
  selector: 'app-e-historique-etudes',
  templateUrl: './e-historique-etudes.component.html',
  styleUrls: ['./e-historique-etudes.component.scss']
})
export class EHistoriqueEtudesComponent implements OnInit {

  etudes = [];

  constructor(
    private employeEtudeService: EmployeEtudeService
  ) { }

  ngOnInit(): void {
    this.employeEtudeService.getAllEtudes().subscribe(
      response => this.etudes = response.reverse(),
      error => console.log(error)
    );
  }

}
