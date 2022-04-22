import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPrescriptionPageRoutingModule } from './add-prescription-routing.module';

import { AddPrescriptionPage } from './add-prescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPrescriptionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddPrescriptionPage]
})
export class AddPrescriptionPageModule {}