import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../../services/Book/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any[];
  errMess: string;

  constructor(private bookService: BookService,
    @Inject('GoogleBooksApi') private GoogleBooksApi) { }

  ngOnInit() {
    this.bookService.getBooks('java')
      .subscribe((book) => this.books = book.items,
      (errMess) => this.errMess = errMess);
  }

}
