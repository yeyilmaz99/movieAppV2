import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Movie {
  id: number;
  name: string;
  description: string;
  imageUrl:string;

}
