import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})

export class BlogItemComponent implements OnInit {
  @Input() blogItem: Blog | undefined
  @Output() editEmitter = new EventEmitter<Blog>();
  @Output() deleteEmitter = new EventEmitter<Blog>();

  constructor(private route: Router, private blogs: BlogServiceService) { }

  ngOnInit(): void {
  }
  edit() {
    this.editEmitter.emit(this.blogItem)
  }
  delete() {
    this.deleteEmitter.emit(this.blogItem)
  }
  
}
