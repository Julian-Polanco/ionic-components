import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla']; 

  constructor() { }

  ngOnInit() {
  }
  handleReorder(event: any) {
    console.log(event);
    const itemMover = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, itemMover);
    console.log(this.characters);
    event.detail.complete();
  }

}
