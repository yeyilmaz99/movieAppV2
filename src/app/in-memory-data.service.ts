import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const movies = [
      {id:1,name:'Movie 1',description:'good film',imageUrl:'1.jpg'},
      {id:2,name:'Movie 2',description:'good film',imageUrl:'2.jpg'},
      {id:3,name:'Movie 3',description:'good film',imageUrl:'3.jpg'},
      {id:4,name:'Movie 4',description:'good film',imageUrl:'4.jpg'},
      {id:5,name:'Movie 5',description:'good film',imageUrl:'5.jpg'},
      {id:6,name:'Movie 6',description:'good film',imageUrl:'6.jpg'},
      {id:7,name:'Movie 7',description:'good film',imageUrl:'7.jpg'},
      {id:8,name:'Movie 8',description:'good film',imageUrl:'8.jpg'},
      {id:9,name:'Movie 9',description:'good film',imageUrl:'9.jpg'},
      {id:10,name:'Movie 10',description:'good film',imageUrl:'10.jpg'},

    ]
    return {movies};
  }

  constructor() { }
}
