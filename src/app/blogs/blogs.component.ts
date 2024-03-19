import { Component } from '@angular/core';
import { Blogs } from '../models/blogs.model';
import { blogsData } from '../services/dataBlogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  blogs: Blogs = blogsData;

  goToBlogLink(id: number): void {
    console.log(id);
  }
}
