import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  book: Book[] = [
    {
      id: 1,
      name: "Animal Farm",
      authors: [
        "George Orwell",
        "Edrick"
      ],
      isbn: 111

    },
    {
      id: 2,
      name: "Arms and the Man",
      authors: [
        "G.B.Shaw",
        "Chua"
      ],
      isbn: 222

    },
    {
      id: 3,
      name: "Ben Hur",
      authors: [
        "Lewis Wallace",
        "Carreon"
      ],
      isbn: 333
    }
  ];
  getBooks = () => {
    return this.book;
  }
}
