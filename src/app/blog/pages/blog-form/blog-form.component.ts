import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  commentsArray: FormArray;
  blogData: Blog[] = [];
  blogId: any;
  constructor(private fb: FormBuilder, private routes: ActivatedRoute, private blogs: BlogServiceService) { 
    this.blogId = this.routes.snapshot.paramMap.get('id')
    if(this.blogId === 'false')
      this.blogData = [{id: 0, title: '', description: '', author: '', comments:['']}]
      else
        this.blogData = this.blogs.getBlog().filter(blog => blog.id === parseInt(this.blogId))
    this.blogForm = this.fb.group({
      title: [this.blogData[0].title],
      description: [this.blogData[0].description],
      author: [this.blogData[0].author],
      comments: this.fb.array([])
    });
    this.commentsArray = this.blogForm.get('comments') as FormArray
    for(let newData of this.blogData[0].comments)
      this.commentsArray.push(new FormControl(newData))
    
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
