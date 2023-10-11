import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalrequestapplicationsPageRoutingModule } from './totalrequestapplications-routing.module';

import { TotalrequestapplicationsPage } from './totalrequestapplications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalrequestapplicationsPageRoutingModule
  ],
  declarations: [TotalrequestapplicationsPage]
})
export class TotalrequestapplicationsPageModule { }
