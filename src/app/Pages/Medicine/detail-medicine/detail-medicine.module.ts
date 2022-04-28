import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMedicinePageRoutingModule } from './detail-medicine-routing.module';

import { DetailMedicinePage } from './detail-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMedicinePageRoutingModule
  ],
  declarations: [DetailMedicinePage]
})
export class DetailMedicinePageModule {}
