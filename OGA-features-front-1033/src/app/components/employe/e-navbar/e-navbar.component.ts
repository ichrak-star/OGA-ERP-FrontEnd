import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-navbar',
  templateUrl: './e-navbar.component.html',
  styleUrls: ['./e-navbar.component.scss']
})
export class ENavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('departement');
    localStorage.removeItem('nom');
    this.router.navigate(['/']);
  }

  nom: string;
  departement: string;
  ngOnInit(){
    this.nom = localStorage.getItem('nom');
    this.departement = localStorage.getItem('departement');
    console.log(this.departement)
  }

}
