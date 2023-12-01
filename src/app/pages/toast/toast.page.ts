import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  public toastButtons = [
    {
      text: 'Mas info',
      role: 'info',
      handler: () => {
        console.log('Clicked info');
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];
  
  constructor(private toastController: ToastController) {}

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }


  setRoleMessage(ev:any) {
    const { role } = ev.detail;
    console.log(`Dismissed with role: ${role}`);
  }
}
