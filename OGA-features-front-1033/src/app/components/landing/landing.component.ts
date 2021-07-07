import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  hide = true;
  email: string = "";
  pass: string = "";

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.redirect();
    }
  }

  redirect(){
    let role = localStorage.getItem('role');
    let departement = localStorage.getItem('departement');
    if(role === 'Agent' && departement === 'Rh'){
      this.router.navigate(['/grh']);
    } else if(role === 'Responsable' && departement === 'Administration'){
      this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['/employe']);
    }
  }

  seConnecter(){
    // Control email et mot de pass
    if(!this.email.trim() || !this.pass.trim()){
      this._snackBar.open("Vous devez remplir tous les champs", '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration : 2500,
        panelClass : 'errToast'
      });
      return;
    }
    let authObj = {
      username: this.email,
      password: this.pass
    }

    this.authService.logIn(authObj).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.userEntity.role);
        localStorage.setItem('departement', res.userEntity.departement);
        localStorage.setItem('nom', res.userEntity.prenom+' '+res.userEntity.nom);
        localStorage.setItem('id', res.userEntity.id);
        this.redirect();
      },
      err => {
        this._snackBar.open("Verifiez votre email et mot de pass", '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration : 2500,
          panelClass : 'errToast'
        });
        console.log(err)
        return;
      }
    )
  }

}
