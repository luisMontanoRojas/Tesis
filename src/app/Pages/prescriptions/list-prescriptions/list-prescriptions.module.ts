import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPrescriptionsPageRoutingModule } from './list-prescriptions-routing.module';

import { ListPrescriptionsPage } from './list-prescriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPrescriptionsPageRoutingModule
  ],
  declarations: [ListPrescriptionsPage]
})
export class ListPrescriptionsPageModule {}
