import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }
  blog: Blog[] = [
    {
      id: 1,
      title: "Alison Kent blog",
      description: "Blog Description",
      author: "Alison Kent",
      comments: [
        "Nice blog",
        "Very nice blog"
      ]
    },
    {
      id: 2,
      title: "Between the Lines",
      description: "Blog Description",
      author: "David Allen",
      comments: [
        "Good Blog",
        "Very good blog"
      ]
    }
  ]

  getBlog = () => {
    return this.blog;
  }
}
