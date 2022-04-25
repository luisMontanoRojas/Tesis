import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { AlertController, ModalController } from '@ionic/angular';
import { AddPrescriptionPage } from '../add-prescription/add-prescription.page';
import { EditPrescriptionPage } from '../edit-prescription/edit-prescription.page';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-list-prescriptions',
  templateUrl: './list-prescriptions.page.html',
  styleUrls: ['./list-prescriptions.page.scss'],
})
export class ListPrescriptionsPage implements OnInit {

  prescriptions: Prescription[] = [];

  constructor(public alertController: AlertController, 
    private router: Router, 
    private prescriptionService: PrescriptionService, 
    private modalController: ModalController,
    public toastService: ToastService) { }

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

  async onEdit(prescription) {
    const modal = await this.modalController.create({
      component: EditPrescriptionPage,
      componentProps: {
        prescriptionToEdit: prescription
      }
    });
    await modal.present();
  }

  async presentAlertConfirm(prescription) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar eliminacion',
      message: '<strong>Estas seguro que deseas eliminar?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.prescriptionService.prescriptions.splice( this.prescriptionService.prescriptions.indexOf(prescription), 1 );
            this.toastService.presentToast("Receta eliminada con exito.");
          }
          
        }
      ]
    });

    await alert.present();
  }

}