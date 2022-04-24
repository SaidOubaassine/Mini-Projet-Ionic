import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../service/service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.page.html',
  styleUrls: ['./new-compte.page.scss'],
})
export class NewComptePage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public alertController: AlertController
  ) { }
  async showOptions(nom, prenom, email) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Vouz voulez envoyer la vérification de compte ?",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("La vérification pas envoyer");
          },
        },
        {
          text: "Oui",
          handler: () => {
            this.authService.EnvoyerVerificationMail();
            this.authService.SetUtilisateur(nom, prenom, email);
          },
        },
      ],
    });
  
    await alert.present();
  }
 
  ngOnInit(){}
  signUp(email, password, nom, prenom){
    this.authService.AjouterUtilisateur(email.value, password.value)
    .then((res) => {
      this.showOptions(nom.value, prenom.value, email.value);
    }).catch((error) => {
      window.alert(error.message);
    });
}
}
