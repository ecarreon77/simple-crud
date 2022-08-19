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
      isbn: 9780451526342

    },
    {
      id: 2,
      name: "Arms and the Man",
      authors: [
        "G.B.Shaw"
      ],
      isbn: 9781494863067

    },
    {
      id: 3,
      name: "Ben Hur",
      authors: [
        "Lewis Wallace"
      ],
      isbn: 9780192831996
    }
  ];
  getBooks = () => {
    return this.books;
  }
}
