import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComptePage } from './new-compte.page';

const routes: Routes = [
  {
    path: '',
    component: NewComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewComptePageRoutingModule {}
