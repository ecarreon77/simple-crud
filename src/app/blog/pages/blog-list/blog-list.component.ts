import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = []
  constructor(private blogService: BlogServiceService) { 
    this.blogs = this.blogService.getBlog();
  }

  ngOnInit(): void { }
    executeEdit(blog:Blog) {
      console.log(blog.id);
    }
  
    executeDelete(blog:Blog) {
      console.log(blog.id);
    }
}
