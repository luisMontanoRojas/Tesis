import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(messageToShow: string) {
    const toast = await this.toastController.create({
          color: 'dark',
          duration: 2000,
          message: messageToShow
        });
        await toast.present();
  }
}
