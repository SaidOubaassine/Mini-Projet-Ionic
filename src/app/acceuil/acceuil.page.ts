import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  data: any[];
  email: any[];


  constructor(public authService: AuthenticationService, private db: AngularFireDatabase, private router: Router,
     private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.emailParams ) {
        this.email = params.emailParams;
      }
    });
   }


    openDetailsWithQueryParams(item) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          idParams: item.id,
          nomParams: item.nom,
          descriptionParams: item.description,
          dureeParams: item.duree,
          emailParams: this.email
        }
      };
      this.router.navigate(['detail-formations'], navigationExtras);
    }



  ngOnInit(): void {
    const ref=this.db.list('Formations');
    ref.valueChanges().subscribe((data)=>{
      this.data= data;
    });
  }

}
