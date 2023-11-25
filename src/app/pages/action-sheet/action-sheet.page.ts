import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }
  onClick(){
   this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss: false,
      buttons: [
        {
          icon: 'trash-outline',
          text: 'Delete',
          role: 'destructive',
          cssClass: 'red',
          data: {
            action: 'delete',
          },
        },
        {
          icon: 'share-outline',
          text: 'Share',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          icon: 'close-outline',
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }


}
