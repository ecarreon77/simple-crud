import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  commentsArray: FormArray;
  
  constructor(private fb: FormBuilder) { 
    this.blogForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([]),
    });
    this.commentsArray = this.blogForm.get('comments') as FormArray
    
  }

  ngOnInit(): void {
}
  addComment() {
    this.commentsArray.push(new FormControl(''));
  
  }

  submit() {
    console.log(this.blogForm?.value);
  }

}
