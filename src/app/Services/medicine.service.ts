import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Medicine } from '../Model/Medicine';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  
  medicines: Medicine[] = [
    {
      id: 1,
      idPrescription: 1,
      name: "paracetamol",
      cant: 2,
      rangeWeek: 1,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 2,
      idPrescription: 1,
      name: "ketamina",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 1,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 3,
      idPrescription: 1,
      name: "óxido nitroso",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 1,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 4,
      idPrescription: 2,
      name: "oxígeno",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 1,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 5,
      idPrescription: 2,
      name: "tiopental",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 1,
      alarms: []
    },
    {
      id: 6,
      idPrescription: 3,
      name: "bupivacaína",
      cant: 2,
      rangeWeek: 1,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 7,
      idPrescription: 3,
      name: "lidocaína",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 1,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 8,
      idPrescription: 3,
      name: "efedrina",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 1,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 9,
      idPrescription: 3,
      name: "atropina",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 1,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 10,
      idPrescription: 4,
      name: "diazepam",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 1,
      alarms: []
    },
    {
      id: 11,
      idPrescription: 4,
      name: "morfina",
      cant: 2,
      rangeWeek: 1,
      rangeDay: 0,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 12,
      idPrescription: 4,
      name: "prometazina",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 1,
      rangeHour: 0,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    },
    {
      id: 13,
      idPrescription: 4,
      name: "ibuprofeno",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 1,
      rangeMinute: 0,
      rangeSecond: 0,
      alarms: []
    }
  ];

  actualMedicine = new Medicine();

  constructor() { }

  getMedicinesByIdPrescription(){
    // return this.prescriptions;
  }

  getMedicine(id) {
    // return this.prescriptions[id];
  }

  editMedicine() {
  }

  deleteMedicine() {
  }

  addMedicine(){
    // prescriptionToAdd.id=this.prescriptions.length+1;
    // this.prescriptions.push(prescriptionToAdd);
  }
 
}
