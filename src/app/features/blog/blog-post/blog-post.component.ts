import { Component } from '@angular/core';
import { PostService, SEOService } from 'src/app/services';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  constructor(seoService: SEOService, public postService: PostService) {
    console.log(postService.curentPost)
    seoService.doSEO(postService.curentPost)
  }
}
