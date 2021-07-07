import { Component, OnInit } from '@angular/core';
import { GrhDemandesService } from '../../grh/services/grh-demandes.service';
import { EmployeDemandesService } from '../services/employe-demandes.service';

@Component({
  selector: 'app-e-historique-demandes',
  templateUrl: './e-historique-demandes.component.html',
  styleUrls: ['./e-historique-demandes.component.scss']
})

export class EHistoriqueDemandesComponent implements OnInit {

 commentaire:string = '';

 // Demandes
 public selectedVal: "tous" | "attente" | "accepté";

 tous=[];
 attente=[];
 acceptes=[];

 setDemandesAAfficher(){
   if(this.selectedVal==="tous"){
     return this.tous;
   }else if(this.selectedVal==="attente"){
     return this.attente;
   }else{
     return this.acceptes
   }
 }

 demandesAAfficher = this.setDemandesAAfficher(); 

 constructor(
   private grhDemandeService: GrhDemandesService,
   private employeDemandeService: EmployeDemandesService
 ) {}

 ngOnInit(): void {

  this.employeDemandeService.getAllDemandes().subscribe(
    response => this.tous = response.reverse(),
    error => console.log(error)
  );
  this.employeDemandeService.getDemandesEnAttente().subscribe(
    response => this.attente = response.reverse(),
    error => console.log(error)
  );
  this.employeDemandeService.getAcceptedDemandes().subscribe(
    response => this.acceptes = response.reverse(),
    error => console.log(error)
  );
  this.changeVal('tous');
 }

 public changeVal(val) {
   this.selectedVal = val;
   this.demandesAAfficher = this.setDemandesAAfficher();
 }
}