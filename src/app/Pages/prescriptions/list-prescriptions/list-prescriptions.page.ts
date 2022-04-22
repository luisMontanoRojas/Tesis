import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { ModalController } from '@ionic/angular';
import { AddPrescriptionPage } from '../add-prescription/add-prescription.page';

@Component({
  selector: 'app-list-prescriptions',
  templateUrl: './list-prescriptions.page.html',
  styleUrls: ['./list-prescriptions.page.scss'],
})
export class ListPrescriptionsPage implements OnInit {

  prescriptions: Prescription[] = [];

  constructor(private router: Router, private prescriptionService: PrescriptionService, private modalController: ModalController) { }

  ngOnInit() {
    this.prescriptions = this.prescriptionService.prescriptions;
    console.log(this.prescriptions);
  }

  onDetail(prescription: Prescription) {
    this.prescriptionService.actualPrescription=prescription;
    this.router.navigate([`/home/list-prescriptions/${prescription.id}`]);
  }

  async onAdd() {
    const modal = await this.modalController.create({
      component: AddPrescriptionPage,
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data)
      this.prescriptions.push(data);
      this.prescriptionService.prescriptions=this.prescriptions;
      console.log(this.prescriptionService.prescriptions)
  }

}