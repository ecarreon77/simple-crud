import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogServiceService } from 'src/app/blog/services/blog-service.service';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  authorsArray: FormArray;
  bookData: Book[] = [];
  bookId: any;
  constructor(private fb: FormBuilder, private routes: ActivatedRoute, private books: BookServiceService) { 
    this.bookId = this.routes.snapshot.paramMap.get('id')
    if(this.bookId === 'false')
      this.bookData = [{id: 0, name: '', authors:[''], isbn: ''}]
      else
        this.bookData = this.books.getBook().filter(book => book.id === parseInt(this.bookId))
    this.bookForm = this.fb.group({
      name: [this.bookData[0].name],
      authors: this.fb.array([]),
      isbn: [this.bookData[0].isbn]
    });
    this.authorsArray = this.bookForm.get('authors') as FormArray
    for(let newData of this.bookData[0].authors)
      this.authorsArray.push(new FormControl(newData))
    
  }

  ngOnInit(): void {
  }

  addAuthors() {
    this.authorsArray.push(new FormControl(''));
  }

  submit() {
    console.log(this.bookForm?.value);
  }

}
