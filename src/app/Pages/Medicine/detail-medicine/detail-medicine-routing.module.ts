import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMedicinePage } from './detail-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMedicinePageRoutingModule {}
