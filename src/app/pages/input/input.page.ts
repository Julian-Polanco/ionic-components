import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  name: string = 'Julian';

  user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(CustomForm:NgForm) {
    console.log('submit');
    console.log(this.user.email);
    console.log(CustomForm)
  }
}
