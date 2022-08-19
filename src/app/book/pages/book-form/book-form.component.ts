import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  authorsArray: FormArray;
  paramId: any;
  sub: Subscription | undefined
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private books: BookServiceService) {
    this.bookForm = this.fb.group({
      id: [''],
      name: [''],
      authors: this.fb.array([]),
      isbn: ['']
    });
    this.authorsArray = this.bookForm.get("authors") as FormArray
   }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.bookForm?.value);
  }

}
