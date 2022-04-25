import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/Services/toast.service';
import { EditPrescriptionPage } from '../edit-prescription/edit-prescription.page';

@Component({
  selector: 'app-detail-prescription',
  templateUrl: './detail-prescription.page.html',
  styleUrls: ['./detail-prescription.page.scss'],
})
export class DetailPrescriptionPage implements OnInit {

  prescription: Prescription = new Prescription;
  datePrescription: string;

  constructor(public alertController: AlertController, 
    private router: Router, 
    private prescriptionServices: PrescriptionService, 
    private datePipe: DatePipe,
    private modalController: ModalController,
    private toastService: ToastService) { }

  ngOnInit() {
    this.prescription = this.prescriptionServices.actualPrescription;
    this.datePrescription = this.datePipe.transform(this.prescription.date,"yyyy-MM-dd");
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
            this.prescriptionServices.prescriptions.splice( this.prescriptionServices.prescriptions.indexOf(prescription), 1 );
            this.router.navigate([`/home/list-prescriptions`]);
            this.toastService.presentToast("Receta eliminada con exito.");
          }
        }
      ]
    });

    await alert.present();
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
}
