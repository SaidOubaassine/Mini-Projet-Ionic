import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFormationsPage } from './detail-formations.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFormationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFormationsPageRoutingModule {}
