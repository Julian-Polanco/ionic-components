import { Component, OnInit } from '@angular/core';

interface component{
   icon:string;
   name:string;
   redirectTo:string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  components:component[]=[
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
