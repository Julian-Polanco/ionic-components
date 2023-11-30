import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { component } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  
  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getAlbums() {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getMenuOptions() {
    return this.httpClient.get<component[]>('/assets/data/menu-options.json');
  }

}
