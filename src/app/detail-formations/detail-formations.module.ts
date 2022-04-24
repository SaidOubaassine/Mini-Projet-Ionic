import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFormationsPageRoutingModule } from './detail-formations-routing.module';

import { DetailFormationsPage } from './detail-formations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFormationsPageRoutingModule
  ],
  declarations: [DetailFormationsPage]
})
export class DetailFormationsPageModule {}
