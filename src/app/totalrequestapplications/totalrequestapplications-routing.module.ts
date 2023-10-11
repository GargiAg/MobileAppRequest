import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalrequestapplicationsPage } from './totalrequestapplications.page';

const routes: Routes = [
  {
    path: '',
    component: TotalrequestapplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalrequestapplicationsPageRoutingModule {}
