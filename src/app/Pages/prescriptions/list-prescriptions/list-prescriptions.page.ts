import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';

@Component({
  selector: 'app-list-prescriptions',
  templateUrl: './list-prescriptions.page.html',
  styleUrls: ['./list-prescriptions.page.scss'],
})
export class ListPrescriptionsPage implements OnInit {

  prescriptions: Prescription[] = [];

  constructor(private router: Router, private prescriptionService: PrescriptionService) { }

  ngOnInit() {
    this.prescriptions = this.prescriptionService.prescriptions;
  }

}


// destinatarios: Destinatario[] = [];

// api: String;

// constructor(private router: Router, private destinatarioServices: DestinatarioService, private modalController: ModalController) {

// }

// ngOnInit() {
//   this.destinatarios = this.destinatarioServices.destinatarios;
//   if (this.destinatarios == undefined) {
//     this.destinatarioServices.getDestinatarios().subscribe(desti => {
//       this.destinatarios = desti;
//     })
//   }
// }
//  ionViewDidEnter() {
//      this.destinatarios = this.destinatarioServices.destinatarios;
//  }

// onDetail(destinatarioActual: Destinatario) {
//   this.destinatarioServices.destinatarioActual=destinatarioActual;
//   this.router.navigate([`/usr-tab/lista-destinatarios/${destinatarioActual.id}`]);
// }

// async onAdd() {
//   const modal = await this.modalController.create({
//     component: UsrAddDestinatariosPage,
//   });
//   await modal.present();
//   const { data } = await modal.onDidDismiss();
//   if (data)
//     this.destinatarios.push(data);
//     this.destinatarioServices.destinatarios=this.destinatarios;

// }