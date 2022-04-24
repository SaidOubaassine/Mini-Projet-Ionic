import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  utilisateurData: any;


  constructor(
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private db: AngularFireDatabase
  ) {
    this.ngFireAuth.authState.subscribe((utilisateur) => {
      if (utilisateur) {
        this.utilisateurData = utilisateur;
        localStorage.setItem('user', JSON.stringify(this.utilisateurData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  SetUtilisateur(nomUser, prenomUser, emailUser){
    const ref = this.db.list('utilisateurs');
    ref.push({ nom: nomUser, prenom: prenomUser, email: emailUser});
}




  Connexion(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }


  AjouterUtilisateur(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  EnvoyerVerificationMail() {
    return this.ngFireAuth.currentUser
      .then((utilisateur) => {
        return utilisateur.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(['connexion']);
      });
  }

 



  get isEmailVerified(): boolean {
    const utilisateur = JSON.parse(localStorage.getItem('user'));
    return utilisateur.emailVerified !== false ? true : false;
  }

 



  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['connexion']);
    });
  }



}