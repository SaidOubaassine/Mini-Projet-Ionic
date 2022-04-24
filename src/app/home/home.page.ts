import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
   // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
   ngOnInit() {

  setTimeout(() => {
    setTimeout(() => {
      this.router.navigateByUrl("connexion");
    });
  }, 3400);
}

}
