import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPrescriptionsPageRoutingModule } from './list-prescriptions-routing.module';

import { ListPrescriptionsPage } from './list-prescriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPrescriptionsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListPrescriptionsPage]
})
export class ListPrescriptionsPageModule {}
