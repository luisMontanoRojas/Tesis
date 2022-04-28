import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPrescriptionPage } from './detail-prescription.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPrescriptionPage
  },
  {
    path: 'medicine/:idMedicine',
    loadChildren: () => import('../../Medicine/detail-medicine/detail-medicine.module').then( m => m.DetailMedicinePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPrescriptionPageRoutingModule {}
