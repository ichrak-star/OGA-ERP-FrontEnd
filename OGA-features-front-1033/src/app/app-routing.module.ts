import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminEtudesComponent } from './components/admin/admin-etudes/admin-etudes.component';
import { AdminHistoriqueAppelOffreComponent } from './components/admin/admin-historique-appel-offre/admin-historique-appel-offre.component';
import { AdminListeEmployesComponent } from './components/admin/admin-liste-employes/admin-liste-employes.component';
import { AdminProjetComponent } from './components/admin/admin-projet/admin-projet.component';
import { AdminProjetsComponent } from './components/admin/admin-projets/admin-projets.component';
import { AdminComponent } from './components/admin/admin.component';
import { EAppelOffreComponent } from './components/employe/e-appel-offre/e-appel-offre.component';
import { ECalendrierComponent } from './components/employe/e-calendrier/e-calendrier.component';
import { ECategorieComponent } from './components/employe/e-categorie/e-categorie.component';
import { ECategoriesComponent } from './components/employe/e-categories/e-categories.component';
import { EEtudeComponent } from './components/employe/e-etude/e-etude.component';
import { EHistoriqueAppeslOffresComponent } from './components/employe/e-historique-appesl-offres/e-historique-appesl-offres.component';
import { EHistoriqueDemandesComponent } from './components/employe/e-historique-demandes/e-historique-demandes.component';
import { EHistoriqueEtudesComponent } from './components/employe/e-historique-etudes/e-historique-etudes.component';
import { ENouvelleAppelOffreComponent } from './components/employe/e-nouvelle-appel-offre/e-nouvelle-appel-offre.component';
import { ENouvelleDemandeComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande.component';
import { ENouvelleEtudeComponent } from './components/employe/e-nouvelle-etude/e-nouvelle-etude.component';
import { EProduitComponent } from './components/employe/e-produit/e-produit.component';
import { EProfilComponent } from './components/employe/e-profil/e-profil.component';
import { ERapportQualiteComponent } from './components/employe/e-rapport-qualite/e-rapport-qualite.component';
import { ERapportsQualiteComponent } from './components/employe/e-rapports-qualite/e-rapports-qualite.component';
import { EmployeComponent } from './components/employe/employe.component';
import { DashboardComponent } from './components/grh/dashboard/dashboard.component';
import { GrhAppelOffreComponent } from './components/grh/grh-appel-offre/grh-appel-offre.component';
import { GrhConsulterEmployeComponent } from './components/grh/grh-consulter-employe/grh-consulter-employe.component';
import { GrhDemandesComponent } from './components/grh/grh-demandes/grh-demandes.component';
import { GrhHistoriqueAppelOffreComponent } from './components/grh/grh-historique-appel-offre/grh-historique-appel-offre.component';
import { GrhListeEmployesComponent } from './components/grh/grh-liste-employes/grh-liste-employes.component';
import { GrhComponent } from './components/grh/grh.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path : '', component: LandingComponent},
  {path : 'employe', 
  component: EmployeComponent,
  children : [
    {path : '', redirectTo:'nouvelle-demande', pathMatch:'full'},
    {path : 'nouvelle-demande', component: ENouvelleDemandeComponent},
    {path : 'historique-demandes', component: EHistoriqueDemandesComponent},
    {path : 'nouvelle-appel-offre', component: ENouvelleAppelOffreComponent},
    {path : 'historique-appels-offres', component: EHistoriqueAppeslOffresComponent},
    {path : 'appel-offre/:id', component: EAppelOffreComponent},
    {path : 'nouvelle-etude', component: ENouvelleEtudeComponent},
    {path : 'historique-etudes', component: EHistoriqueEtudesComponent},
    {path : 'etude/:id', component: EEtudeComponent},
    {path : 'mon-calendrier', component: ECalendrierComponent},
    {path : 'categories',component: ECategoriesComponent},
    {path : 'categorie/:id',component: ECategorieComponent},
    {path: 'categorie/:idCategorie/produit/:id',component: EProduitComponent},
    {path: 'rapports-qualités', component: ERapportsQualiteComponent},
    {path: 'rapport-qualite/:id', component: ERapportQualiteComponent},
    {path: 'mon-profil', component: EProfilComponent}
    ]
  },
  {path : 'grh',
  component : GrhComponent,
  children : [
    {path : '', redirectTo:'employés', pathMatch:'full'},
    {path : 'employés', component: GrhListeEmployesComponent},
    {path : 'demandes', component: GrhDemandesComponent},
    {path : 'employe/:id', component: GrhConsulterEmployeComponent},
    {path : 'historique-appels-offres', component: GrhHistoriqueAppelOffreComponent},
    {path : 'appel-offre/:id', component:GrhAppelOffreComponent},
    {path: 'mon-profil', component: EProfilComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]
  },
  {path : 'admin',
  component : AdminComponent,
  children : [
    {path : '', redirectTo:'dashboard', pathMatch:'full'},
    {path: 'dashboard', component: AdminDashboardComponent},
    {path : 'employés', component: GrhListeEmployesComponent},
    {path : 'employe/:id', component: GrhConsulterEmployeComponent},
    {path : 'demandes', component: GrhDemandesComponent},
    {path : 'historique-appels-offres', component: AdminHistoriqueAppelOffreComponent},
    {path : 'appel-offre/:id', component:EAppelOffreComponent},
    {path : 'categories',component: ECategoriesComponent},
    {path : 'categorie/:id',component: ECategorieComponent},
    {path: 'categorie/:idCategorie/produit/:id',component: EProduitComponent},
    {path: 'projets', component: AdminProjetsComponent},
    {path : 'projet/:id',component: AdminProjetComponent},
    {path : 'historique-etudes', component: AdminEtudesComponent},
    {path : 'etude/:id', component: EEtudeComponent},
    {path: 'rapports-qualités', component: ERapportsQualiteComponent},
    {path: 'rapport-qualite/:id', component: ERapportQualiteComponent},
    {path: 'mon-profil', component: EProfilComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
