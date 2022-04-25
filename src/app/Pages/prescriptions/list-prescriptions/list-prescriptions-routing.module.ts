import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPrescriptionsPage } from './list-prescriptions.page';

const routes: Routes = [
  {
    path: '',
    component: ListPrescriptionsPage
  },
  {
    path: 'add-prescription',
    loadChildren: () => import('../add-prescription/add-prescription.module').then( m => m.AddPrescriptionPageModule)
  },
  {
    path: ':idPrescription',
    loadChildren: () => import('../detail-prescription/detail-prescription.module').then( m => m.DetailPrescriptionPageModule)
  },
  {
    path: 'edit-prescription',
    loadChildren: () => import('../edit-prescription/edit-prescription.module').then( m => m.EditPrescriptionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPrescriptionsPageRoutingModule {}
