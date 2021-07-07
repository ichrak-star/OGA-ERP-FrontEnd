import { Component, OnInit } from '@angular/core';
import { EmployeEtudeService } from '../../employe/services/employe-etude.service';

@Component({
  selector: 'app-admin-etudes',
  templateUrl: './admin-etudes.component.html',
  styleUrls: ['./admin-etudes.component.scss']
})
export class AdminEtudesComponent implements OnInit {

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
