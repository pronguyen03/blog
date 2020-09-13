import { Component } from '@angular/core';
import { PostService } from 'src/app/services';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent {
  constructor(public postService: PostService) {

  }
}
