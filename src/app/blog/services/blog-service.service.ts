import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }
  blogs: Blog[] = [
    {
      id: 1,
      title: "Fear of a Black Nation",
      description: "Race, Sex, and Security in Sixties Montreal",
      author: "David Austin",
      comments: [
        "Nice blog",
        "Very nice blog"
      ]
    },
    {
      id: 2,
      title: "Disarm, Defund, Dismantle",
      description: "Police Abolition in Canada",
      author: "Shiri Pasternak",
      comments: [
        "Good Blog",
        "Very good blog"
      ]
    }
  ]

  getBlog = () => {
    return this.blogs;
  }
}
