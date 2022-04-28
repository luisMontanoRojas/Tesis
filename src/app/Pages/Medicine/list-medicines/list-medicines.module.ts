import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMedicinesPageRoutingModule } from './list-medicines-routing.module';

import { ListMedicinesPage } from './list-medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMedicinesPageRoutingModule
  ],
  declarations: [ListMedicinesPage]
})
export class ListMedicinesPageModule {}
