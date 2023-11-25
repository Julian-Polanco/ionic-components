import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  public alertInputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      attributes: {
        maxlength: 20,
      },
    },
    {
      name: 'nickname',
      type: 'text',
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      name: 'age',
      type: 'number',
      placeholder: 'Age',
      attributes: {
        min: 18,
        max: 70,
      },
      min: 18,
      max: 70,
    },
    {
      name: 'bio',
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
 
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  setResult(ev : any ) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  showResult(ev : any ) {
    console.log(ev.detail.data);
  }
  
}
