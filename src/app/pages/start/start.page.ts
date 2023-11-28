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
    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Buttons',
      redirectTo:'/buttons'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      name:'Checkboxs',
      redirectTo:'/check'
    },
    {
      icon:'calendar-outline',
      name:'Date time',
      redirectTo:'/date-time'
    },
    {
      icon:'car-outline',
      name:'Fab',
      redirectTo:'/fab'
    },
    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo:'/grid'
    },
    {
      icon:'infinite-outline',
      name:'Infinite Scroll',
      redirectTo:'/infinite'
    },
    {
      icon:'hammer-outline',
      name:'Input forms',
      redirectTo:'/input'
    },
    {
      icon:'list-outline',
      name:'List - Sliding',
      redirectTo:'/list'
    },
    {
      icon:'reorder-three-outline',
      name:'Reorder',
      redirectTo:'/list-reorder'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
