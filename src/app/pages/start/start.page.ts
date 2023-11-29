import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { component } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  components!: Observable<component[]>;

  constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }
  showMenu() {
    this.menuCtrl.open('main');
  }
}
