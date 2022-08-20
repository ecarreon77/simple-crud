import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  books: Book[] = [
    {
      id: 1,
      name: "Animal Farm",
      authors: [
        "George Orwell"
      ],
      isbn: "9780451526342"

    },
    {
      id: 2,
      name: "Arms and the Man",
      authors: [
        "G.B.Shaw"
      ],
      isbn: "9781494863067"

    },
    {
      id: 3,
      name: "Ben Hur",
      authors: [
        "Lewis Wallace"
      ],
      isbn: "9780192831996"
    }
  ];
  getBook() {
    return this.books;
  }

  setBook(dt: Book) {
    this.books.push(dt)
  }

  editBook(dt: Book){
    for(let data of this.books){
      if(data.id === dt.id){
        data.name = dt.name
        data.authors = dt.authors
        data.isbn = dt.isbn
      }
    }
  }
}
