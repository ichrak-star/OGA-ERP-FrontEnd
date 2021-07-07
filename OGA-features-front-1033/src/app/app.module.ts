import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { EmployeComponent } from './components/employe/employe.component';
import { GrhComponent } from './components/grh/grh.component';
import { LandingComponent } from './components/landing/landing.component';
import { ENavbarComponent } from './components/employe/e-navbar/e-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ENouvelleDemandeComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande.component';
import { EHistoriqueDemandesComponent } from './components/employe/e-historique-demandes/e-historique-demandes.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ENouvelleDemandeAttestationComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande-attestation/e-nouvelle-demande-attestation.component';
import { ENouvelleDemandeCongeComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande-conge/e-nouvelle-demande-conge.component';
import { ENouvelleDemandeAvanceComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande-avance/e-nouvelle-demande-avance.component';
import { ENouvelleDemandeFichePaieComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande-fiche-paie/e-nouvelle-demande-fiche-paie.component';
import { ENouvelleDemandeAutreComponent } from './components/employe/e-nouvelle-demande/e-nouvelle-demande-autre/e-nouvelle-demande-autre.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { GrhNavbarComponent } from './components/grh/grh-navbar/grh-navbar.component';
import { GrhListeEmployesComponent } from './components/grh/grh-liste-employes/grh-liste-employes.component';
import { GrhDemandesComponent } from './components/grh/grh-demandes/grh-demandes.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { GrhConsulterEmployeComponent } from './components/grh/grh-consulter-employe/grh-consulter-employe.component';
import { ENouvelleAppelOffreComponent } from './components/employe/e-nouvelle-appel-offre/e-nouvelle-appel-offre.component';
import { EHistoriqueAppeslOffresComponent } from './components/employe/e-historique-appesl-offres/e-historique-appesl-offres.component';
import { EAppelOffreComponent } from './components/employe/e-appel-offre/e-appel-offre.component';
import { GrhAppelOffreComponent } from './components/grh/grh-appel-offre/grh-appel-offre.component';
import { GrhHistoriqueAppelOffreComponent } from './components/grh/grh-historique-appel-offre/grh-historique-appel-offre.component';
import { ENouvelleEtudeComponent } from './components/employe/e-nouvelle-etude/e-nouvelle-etude.component';
import { EHistoriqueEtudesComponent } from './components/employe/e-historique-etudes/e-historique-etudes.component';
import { EEtudeComponent } from './components/employe/e-etude/e-etude.component';
import { ECalendrierComponent } from './components/employe/e-calendrier/e-calendrier.component';
import { ECategorieComponent } from './components/employe/e-categorie/e-categorie.component';
import { ECategoriesComponent } from './components/employe/e-categories/e-categories.component';
import { EProduitComponent } from './components/employe/e-produit/e-produit.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminListeEmployesComponent } from './components/admin/admin-liste-employes/admin-liste-employes.component';
import { AdminConsulterEmployeComponent } from './components/admin/admin-consulter-employe/admin-consulter-employe.component';
import { AdminProjetsComponent } from './components/admin/admin-projets/admin-projets.component';
import { AdminProjetComponent } from './components/admin/admin-projet/admin-projet.component';
import { AdminHistoriqueAppelOffreComponent } from './components/admin/admin-historique-appel-offre/admin-historique-appel-offre.component';
import { AdminEtudesComponent } from './components/admin/admin-etudes/admin-etudes.component';
import { ERapportsQualiteComponent } from './components/employe/e-rapports-qualite/e-rapports-qualite.component';
import { ERapportQualiteComponent } from './components/employe/e-rapport-qualite/e-rapport-qualite.component';
import { EProfilComponent } from './components/employe/e-profil/e-profil.component';
import { MatTreeModule } from '@angular/material/tree';
import { DialogDataExampleDialog } from './components/grh/grh-liste-employes/grh-liste-employes.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardComponent } from './components/grh/dashboard/dashboard.component';
import { MatChipsModule } from '@angular/material/chips';
import { DialogDataExampleDialog2 } from './components/admin/admin-projet/admin-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    GrhComponent,
    LandingComponent,
    ENavbarComponent,
    ENouvelleDemandeComponent,
    EHistoriqueDemandesComponent,
    ENouvelleDemandeAttestationComponent,
    ENouvelleDemandeCongeComponent,
    ENouvelleDemandeAvanceComponent,
    ENouvelleDemandeFichePaieComponent,
    ENouvelleDemandeAutreComponent,
    GrhNavbarComponent,
    GrhListeEmployesComponent,
    GrhDemandesComponent,
    GrhConsulterEmployeComponent,
    ENouvelleAppelOffreComponent,
    EHistoriqueAppeslOffresComponent,
    EAppelOffreComponent,
    GrhAppelOffreComponent,
    GrhHistoriqueAppelOffreComponent,
    ENouvelleEtudeComponent,
    EHistoriqueEtudesComponent,
    EEtudeComponent,
    ECalendrierComponent,
    ECategorieComponent,
    ECategoriesComponent,
    EProduitComponent,
    AdminComponent,
    AdminListeEmployesComponent,
    AdminConsulterEmployeComponent,
    AdminProjetsComponent,
    AdminProjetComponent,
    AdminHistoriqueAppelOffreComponent,
    AdminEtudesComponent,
    ERapportsQualiteComponent,
    ERapportQualiteComponent,
    EProfilComponent,
    DialogDataExampleDialog,
    AdminDashboardComponent,
    DashboardComponent,
    DialogDataExampleDialog2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatTreeModule,
    MatGridListModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
