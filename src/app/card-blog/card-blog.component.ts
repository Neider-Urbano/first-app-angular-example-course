import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../models/blogs.model';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css'],
})
export class CardBlogComponent implements OnInit {
  @Input() blog?: Blog;

  ngOnInit(): void {
    const date = this.blog?.date ?? new Date();
    const blogId = this.blog?.id ?? 0;
    this.blog?.date.setMonth(date.getMonth() + blogId);
  }
}
