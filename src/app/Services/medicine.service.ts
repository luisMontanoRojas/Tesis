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
      name: "Paracetamol",
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
      name: "Ketamina",
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
      name: "Oxido nitroso",
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
      name: "Oxígeno",
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
      name: "Tiopental",
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
      name: "Bupivacaína",
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
      name: "Lidocaína",
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
      name: "Efedrina",
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
      name: "Atropina",
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
      name: "Diazepam",
      cant: 2,
      rangeWeek: 0,
      rangeDay: 0,
      rangeHour: 10,
      rangeMinute: 0,
      rangeSecond: 1,
      alarms: []
    },
    {
      id: 11,
      idPrescription: 4,
      name: "Morfina",
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
      name: "Prometazina",
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
      name: "Ibuprofeno",
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
  medicinesByIdPrescription: Medicine[] = [];

  constructor() { 
  }

  getMedicinesByIdPrescription(idPrescription:number){
    this.medicinesByIdPrescription=[];
    for (let index = 0; index < this.medicines.length; index++) {
      if(this.medicines[index].idPrescription == idPrescription){
        console.log(this.medicines[index])
        this.medicinesByIdPrescription.push(this.medicines[index]);
      }
      // const element = array[index];
      
    }
    // this.medicines.map(e=> {
    //   if(e.id == idPrescription){
    //     this.medicinesByIdPrescription.push(e);
    //   }
    // });
    console.log(this.medicinesByIdPrescription);
    return this.medicinesByIdPrescription;
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
