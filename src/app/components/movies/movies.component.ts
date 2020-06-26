import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../../services/Movies/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  term: String = '';
  movieIds: any;
  movies: any[]= [];
  errMess: string;

  constructor(private movieService: MovieService) { }

  receiveMessage($event) {
    this.term = $event;
    this.movieService.getMovieIds(this.term)
      .subscribe((movieids) => {
        this.movieIds = movieids;
        this.movieIds.Search.map((movieid) => {
          this.movieService.getMovieDetails(movieid.imdbID)
            .subscribe((movie) => this.movies = [...this.movies, movie],
              (errMess) => this.errMess = errMess);
        })
      },
      (errMess) => this.errMess = errMess);
  }

  ngOnInit() {
  }

}
