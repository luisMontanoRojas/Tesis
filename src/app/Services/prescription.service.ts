import { Injectable } from '@angular/core';
import { Prescription } from '../Model/Prescription';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  // prescriptions: [];
  prescriptions: Prescription[] = [
    {
      'id': 1,
      'name': 'test1',
      'doctor': 'string',
      'date': new Date(),
      'Illness': 'string',
    },
    {
      'id': 2,
      'name': 'test2',
      'doctor': 'string',
      'date': new Date(),
      'Illness': 'string',
    },
    {
      'id': 3,
      'name': 'test3',
      'doctor': 'string',
      'date': new Date(),
      'Illness': 'string',
    },
    {
      'id': 4,
      'name': 'test4',
      'doctor': 'string',
      'date': new Date(),
      'Illness': 'string',
    }
  ];
  // prescriptionActual: Prescription = new Prescription;

  constructor() { }

  getPrescriptions(){
    return this.prescriptions;
  }

  getPrescription(id) {
    return this.prescriptions[id];
  }

  editPrescription(prescriptionToUpdated: Prescription) {
    // let prescription = this.prescriptions.filter()
    // for (let index = 0; index < this.prescriptions.length; index++) {
    //   const element = this.prescriptions[index];
      
    // }
    // const url = `${this.pedidoUrl}/1/pedidos/${pedido.id}`;
    // return this.http.put(url, Pedido, httpOptions);
  }

  deletePrescription(id) {
    // const url = this.pedidoUrl + "/1" + "/pedidos/" + pedido.id;
    // return this.http.delete<Pedido>(url, httpOptions);
  }

  addPrescription(prescriptionToAdd: Prescription) {
    // pedido.usuarioId= this.user.id;
    // const url = this.pedidoUrl + "/" + pedido.usuarioId + "/pedidos";
    // let body = JSON.stringify(pedido);
    // return this.http.post<Pedido>(url, body, httpOptions);
  }
}
