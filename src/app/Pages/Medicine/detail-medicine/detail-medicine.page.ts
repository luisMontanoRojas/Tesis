import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/Model/Medicine';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-detail-medicine',
  templateUrl: './detail-medicine.page.html',
  styleUrls: ['./detail-medicine.page.scss'],
})
export class DetailMedicinePage implements OnInit {
  
  medicine: Medicine = new Medicine;

  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
    this.medicine = this.medicineService.actualMedicine;
  }

}
