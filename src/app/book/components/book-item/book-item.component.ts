import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() bookItem: Book | undefined
  @Output() editEmitter = new EventEmitter<Book>();
  @Output() deleteEmitter = new EventEmitter<Book>();
  constructor(private route: Router, private books: BookServiceService) { }

  ngOnInit(): void {
  }
  edit() {
    this.editEmitter.emit(this.bookItem)
  }
  delete() {
    this.deleteEmitter.emit(this.bookItem)
  }
}
