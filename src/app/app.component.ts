import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { component } from 'src/app/interfaces/interfaces';
import { DataService } from './services/data.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  components!: Observable<component[]>
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }
}
