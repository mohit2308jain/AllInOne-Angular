import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../../services/Book/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  term: String = '';
  books: any[];
  errMess: string;

  constructor(private bookService: BookService,
    @Inject('GoogleBooksApi') private GoogleBooksApi) { }
  
  receiveMessage($event) {
    this.term = $event;
    this.bookService.getBooks(this.term)
      .subscribe((book) => this.books = book.items,
      (errMess) => this.errMess = errMess);
  }

  goToLink(link: string){
    window.open(link, "_blank");
  }

  ngOnInit() {
  }

}
