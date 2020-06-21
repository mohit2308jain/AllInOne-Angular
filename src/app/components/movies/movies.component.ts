import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../../services/Movies/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  books: any[];
  errMess: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies('frozen');
  }

}
