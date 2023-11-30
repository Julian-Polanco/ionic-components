import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  filter: string = '';
  column: string = 'publisher';

  superHeroes!: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroesOptions();
  }
  segmentChanged(event:any){
    this.filter = event.detail.value;

    console.log(event.detail.value);
  }

}
