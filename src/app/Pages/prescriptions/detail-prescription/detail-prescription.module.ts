import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPrescriptionPageRoutingModule } from './detail-prescription-routing.module';

import { DetailPrescriptionPage } from './detail-prescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPrescriptionPageRoutingModule
  ],
  declarations: [DetailPrescriptionPage]
})
export class DetailPrescriptionPageModule {}
