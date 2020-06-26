import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../../services/Book/book.service'

import { BOOKS } from '../../shared/books'; 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  term: String = '';
  booklist: any;
  errMess: string;

  constructor(private bookService: BookService,
    @Inject('GoogleBooksApi') private GoogleBooksApi) { }
  
  receiveMessage($event) {
    this.term = $event;
    this.bookService.getBooks(this.term)
      .subscribe((book) => this.booklist = book,
      (errMess) => this.errMess = errMess);
  }

  goToLink(link: string){
    window.open(link, "_blank");
  }

  ngOnInit() {
  }

}
