import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'list-prescriptions',
        loadChildren: () => import('../prescriptions/list-prescriptions/list-prescriptions.module').then( m => m.ListPrescriptionsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/list-prescriptions',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
