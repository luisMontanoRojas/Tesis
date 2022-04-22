import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/Model/Prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';

@Component({
  selector: 'app-detail-prescription',
  templateUrl: './detail-prescription.page.html',
  styleUrls: ['./detail-prescription.page.scss'],
})
export class DetailPrescriptionPage implements OnInit {

  prescription: Prescription = new Prescription;
  datePrescription: string;

  constructor(private prescriptionServices: PrescriptionService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.prescription = this.prescriptionServices.actualPrescription;
    this.datePrescription = this.datePipe.transform(this.prescription.date,"yyyy-MM-dd");
  }

  // destinatario: Destinatario = new Destinatario;
  // constructor(public alertController: AlertController, private modalController: ModalController, private destinatarioServices: DestinatarioService,
  //   private route: ActivatedRoute, private router: Router) { }

  // ngOnInit() {
  //   this.destinatario = this.destinatarioServices.destinatarioActual;
  //   if (this.destinatario.id == undefined) {
  //     const destinatarioId = this.route.snapshot.paramMap.get("idDestinatario");
  //     this.destinatarioServices.getDestinatarioPorId(destinatarioId).subscribe(destinatario => {
  //       this.destinatario = destinatario;
  //     })
  //   }

  // }

}
