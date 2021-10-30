import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggingService } from './logging.service';
import { Movie } from './movie/movie.component';
import { Injectable } from '@angular/core';
import { MoviesData } from './movie/movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';
  constructor(
    private LoggingService:LoggingService,
    private http:HttpClient
    ) { }

  //Movie Listesini Geri Gönderecek
  getMovies(): Observable<Movie[]>{

    this.LoggingService.add('MovieService: Listing Movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }
  getMovie(id:number): Observable<Movie>{
    this.LoggingService.add('MovieService: Showing Movie Detail By Id='+id)
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }
  update(movie:Movie):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put(this.apiMoviesUrl,movie, httpOptions)
  }
  add(movie:Movie):Observable<Movie> {
    return this.http.post<Movie>(this.apiMoviesUrl,movie);
  }
  delete(movie:Movie): Observable<Movie> {
    return this.http.delete<Movie>(this.apiMoviesUrl+'/'+movie.id);
  }
}
