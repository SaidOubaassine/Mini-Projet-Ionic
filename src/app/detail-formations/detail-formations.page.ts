import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-detail-formations',
  templateUrl: './detail-formations.page.html',
  styleUrls: ['./detail-formations.page.scss'],
})
export class DetailFormationsPage implements OnInit {

  nom: any[];
  id: any[];
  duree: any[];
  description: any[];
  email: any[];
  constructor(private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase,
     public toastController: ToastController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.idParams && params.nomParams && params.descriptionParams  && params.idParams) {
        this.nom = params.nomParams;
        this.id = params.idParams;
        this.description= params.descriptionParams;
        this.duree=params.dureeParams;
        this.email=params.emailParams;
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Vous êtes inscrit'
    });
    toast.present();
  }

  InscrirUtilisateur(email, nom){
    const tutorialsRef = this.db.list('utilisateurs-formation');
    tutorialsRef.push({ nomFormation: nom, emailUtilisateur: email});
    this.presentToast();
  }

  ngOnInit() {

  }

}
