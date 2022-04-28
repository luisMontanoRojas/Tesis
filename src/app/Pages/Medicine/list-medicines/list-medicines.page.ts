import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Medicine } from 'src/app/Model/Medicine';
import { MedicineService } from 'src/app/Services/medicine.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.page.html',
  styleUrls: ['./list-medicines.page.scss'],
})
export class ListMedicinesPage implements OnInit {

  @Input() idPrescription: number;
  medicines: Medicine[] = [];

  constructor(public alertController: AlertController, 
    private router: Router, 
    private medicineService: MedicineService, 
    private modalController: ModalController,
    public toastService: ToastService) { }

  ngOnInit() {
    this.medicines = this.medicineService.getMedicinesByIdPrescription(this.idPrescription);
    console.log(this.medicines)
  }

  onDetail(medicine){
    this.medicineService.actualMedicine = medicine;
    this.router.navigate([`/home/list-prescriptions/${medicine.idPrescription}/medicine/${medicine.id}`]);
    console.log("asdasd")
  }

}
