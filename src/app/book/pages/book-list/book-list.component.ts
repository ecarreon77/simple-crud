import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookId: Book | undefined;
  books: Book[] = [];
  updatedBook: Subscription | undefined;
  private router: Router | undefined;
  constructor(private blogService: BookServiceService) { 
    this.books = this.blogService.getBook();
  }

  ngOnInit(): void {
  }
  executeEdit(book:Book) {
      console.log(book.id);
    }
  
    executeDelete(book:Book) {
      console.log(book.id);
    }
}
