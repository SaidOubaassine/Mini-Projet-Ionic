import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../service/service";
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}
  ngOnInit() {

  }
  connexion(email, password) {
    this.authService.Connexion(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            emailParams: email.value
          }
        };    
        this.router.navigate(['/acceuil'], navigationExtras);  
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
