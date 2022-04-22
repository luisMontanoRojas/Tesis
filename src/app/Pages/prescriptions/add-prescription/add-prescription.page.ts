import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.page.html',
  styleUrls: ['./add-prescription.page.scss'],
})
export class AddPrescriptionPage implements OnInit {

  formGruop: FormGroup;
  illness: AbstractControl;
  doctor: AbstractControl;
  precriptionAdd: Prescription = new Prescription;

  constructor(
    private fb: FormBuilder, 
    private modalController: ModalController, 
    private prescriptionService: PrescriptionService
    ) { 
      
      this.formGruop = fb.group({
          prescriptionIllness: ['', Validators.required],
        prescriptionDoctor: ['', Validators.required],
      });
      this.illness = this.formGruop.controls['prescriptionIllness'];
      this.doctor = this.formGruop.controls['prescriptionDoctor'];
    }

  ngOnInit() {
  }

  onCreate() {
    this.precriptionAdd.illness = this.formGruop.get('prescriptionIllness').value;;
    this.precriptionAdd.doctor = this.formGruop.get('prescriptionDoctor').value;;
    this.precriptionAdd.date = new Date();

    try {
      this.prescriptionService.addPrescription(this.precriptionAdd);
      this.modalController.dismiss();
    } catch(e) {
      console.log(e); 
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
