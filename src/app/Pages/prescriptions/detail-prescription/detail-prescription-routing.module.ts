import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPrescriptionPage } from './detail-prescription.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPrescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPrescriptionPageRoutingModule {}
