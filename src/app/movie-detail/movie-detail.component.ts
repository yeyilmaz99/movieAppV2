import { MovieService } from './../movie.service';
import { Movie } from './../movie/movie.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  //localhost:4200/detail/2



  @Input() clickedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location :Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.clickedMovie = movie
      })
  }
  save(): void {
    this.movieService.update(this.clickedMovie)
      .subscribe(() => {
        this.location.back();
      })
  }


}
