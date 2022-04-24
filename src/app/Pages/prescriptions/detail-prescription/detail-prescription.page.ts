import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail-prescription',
  templateUrl: './detail-prescription.page.html',
  styleUrls: ['./detail-prescription.page.scss'],
})
export class DetailPrescriptionPage implements OnInit {

  prescription: Prescription = new Prescription;
  datePrescription: string;

  constructor(public alertController: AlertController, private router: Router, private prescriptionServices: PrescriptionService, private datePipe: DatePipe) { }

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
          }
        }
      ]
    });

    await alert.present();
  }
}
