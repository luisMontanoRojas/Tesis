import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMedicinesPage } from './list-medicines.page';

const routes: Routes = [
  {
    path: '',
    component: ListMedicinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMedicinesPageRoutingModule {}
