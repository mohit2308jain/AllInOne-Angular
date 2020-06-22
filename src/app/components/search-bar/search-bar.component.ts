import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: String = '';

  @Output() searchEvent = new EventEmitter<String>();

  submit = () => {
    this.searchEvent.emit(this.searchTerm);
  }

  @Input() childMessage: String;

  constructor() { }

  ngOnInit() {
  }

}
