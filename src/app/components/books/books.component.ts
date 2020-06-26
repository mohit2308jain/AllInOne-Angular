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
  isLoading: boolean = false;

  constructor(private bookService: BookService,
    @Inject('GoogleBooksApi') private GoogleBooksApi) { }
  
  receiveMessage($event) {
    this.isLoading = true;
    this.term = $event;
    this.bookService.getBooks(this.term)
      .subscribe((book) => {
          this.booklist = book;
          this.isLoading = false;
        },
        (errMess) => {
          this.errMess = errMess;
          this.isLoading = false;
        }
      );
  }

  goToLink(link: string){
    window.open(link, "_blank");
  }

  ngOnInit() {
  }

}
