import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root',})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let USERS = [
      {id: 1, username: 'sauna', password: '123', token: 'aaa'},
      {id: 2, username: 'aurinko', password: '321', token: 'bbb'}
    ];
    return {USERS};
  }
  constructor() { }
}