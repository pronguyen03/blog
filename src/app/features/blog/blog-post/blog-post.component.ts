import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService, SEOService } from 'src/app/services';
import { GlobalService } from 'src/app/services/global.service';


declare var ng: any;

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPostComponent {
  constructor(
    seoService: SEOService, 
    public postService: PostService,
    public globalService: GlobalService,
    private router: Router, 
    private route: ActivatedRoute, 
  ) {
    seoService.doSEO(postService.curentPost)
    this.globalService.isReadingAPost = true
  }

  ngOnDestroy() {
    this.globalService.isReadingAPost = false
  }
}
