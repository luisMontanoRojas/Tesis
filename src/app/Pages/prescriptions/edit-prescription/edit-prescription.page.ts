import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.page.html',
  styleUrls: ['./edit-prescription.page.scss'],
})
export class EditPrescriptionPage implements OnInit {

  formGruop: FormGroup;
  illness: AbstractControl;
  doctor: AbstractControl;
  prescriptionEdit: Prescription = new Prescription;
  @Input() prescriptionToEdit;

  constructor(private fb: FormBuilder, 
    private modalController: ModalController, 
    private prescriptionService: PrescriptionService,
    public toastService: ToastService) {
      this.formGruop = fb.group({
        prescriptionIllness: ['', Validators.required],
        prescriptionDoctor: ['', Validators.required],
      });
      this.illness = this.formGruop.controls['prescriptionIllness'];
      this.doctor = this.formGruop.controls['prescriptionDoctor'];
     }

  ngOnInit() {
    this.prescriptionEdit.id = this.prescriptionToEdit.id;
    this.prescriptionEdit.illness = this.prescriptionToEdit.illness;
    this.prescriptionEdit.doctor = this.prescriptionToEdit.doctor;
    this.prescriptionEdit.date = this.prescriptionToEdit.date;
  }

  onEdit() {
    try {
      for (let index = 0; index < this.prescriptionService.prescriptions.length; index++) {
        if(this.prescriptionService.prescriptions[index].id==this.prescriptionEdit.id){
          this.prescriptionService.prescriptions[index].doctor=this.prescriptionEdit.doctor;
          this.prescriptionService.prescriptions[index].illness=this.prescriptionEdit.illness;
        }
      }
      this.closeModal();
      this.toastService.presentToast('Receta editada con exito.');
    } catch (error) {
      console.log(error);
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
