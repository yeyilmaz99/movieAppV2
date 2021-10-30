import { MovieService } from '../movie.service';
import { Component } from '@angular/core';
import { Movie } from '../movie/movie.component';


@Component({
  selector: 'movieList',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  title = 'Movie List'
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect = (movie: Movie): void => {
    this.selectedMovie = movie;
  };
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies
      })
  }
  add(name: string, imageUrl: string, description: string): void {
    this.movieService.add({ name, imageUrl, description } as Movie)
      .subscribe(movie => this.movies.push(movie));
  }
  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.delete(movie).subscribe();
  }

}
