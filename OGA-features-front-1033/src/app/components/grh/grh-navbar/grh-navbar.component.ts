import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grh-navbar',
  templateUrl: './grh-navbar.component.html',
  styleUrls: ['./grh-navbar.component.scss']
})
export class GrhNavbarComponent {

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
  ngOnInit(){
    this.nom = localStorage.getItem('nom');
  }

}
