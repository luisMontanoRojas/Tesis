import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPrescriptionsPage } from './list-prescriptions.page';

const routes: Routes = [
  {
    path: '',
    component: ListPrescriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPrescriptionsPageRoutingModule {}
