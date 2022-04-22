import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Prescription } from '../Model/Prescription';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  prescriptions: Prescription[] = [
    {
      'id': 1,
      'illness': 'Dolor de cabeza',
      'doctor': 'Dr. Juan',
      'date': new Date(),
    },
    {
      'id': 2,
      'illness': 'Lumbago',
      'doctor': 'Dr. Pedro',
      'date': new Date(),
    },
    {
      'id': 3,
      'illness': 'Fractura de muñeca',
      'doctor': 'Dr. Felipe',
      'date': new Date(),
    },
    {
      'id': 4,
      'illness': 'Migraña',
      'doctor': 'Dr. Rodrigo',
      'date': new Date(),
    }
  ];

  actualPrescription = new Prescription();

  constructor() { }

  getPrescriptions(){
    return this.prescriptions;
  }

  getPrescription(id) {
    return this.prescriptions[id];
  }

  editPrescription(prescriptionToUpdated: Prescription) {
  }

  deletePrescription(id) {
  }

  addPrescription(prescriptionToAdd: Prescription){
    prescriptionToAdd.id=this.prescriptions.length+1;
    this.prescriptions.push(prescriptionToAdd);
  }
 
}
