import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewComptePageRoutingModule } from './new-compte-routing.module';

import { NewComptePage } from './new-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewComptePageRoutingModule
  ],
  declarations: [NewComptePage]
})
export class NewComptePageModule {}
