import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewapplicationPageRoutingModule } from './newapplication-routing.module';

import { NewapplicationPage } from './newapplication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewapplicationPageRoutingModule
  ],
  declarations: [NewapplicationPage]
})
export class NewapplicationPageModule {}
