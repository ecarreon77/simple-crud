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
    this.blogs = blogService.getBlog();
  }

  ngOnInit(): void {
  }
  executeAction(blog:Blog) {
    console.log(blog.id)
  }
}
