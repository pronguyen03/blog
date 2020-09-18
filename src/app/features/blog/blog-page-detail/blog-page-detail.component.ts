import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { GlobalService, PostService, SEOService } from 'src/app/services';

declare var ng: any;

@Component({
  selector: 'app-blog-page-detail',
  templateUrl: './blog-page-detail.component.html',
  styleUrls: ['./blog-page-detail.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPageDetailComponent {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    public globalService: GlobalService,
    seoService: SEOService, 
    postService: PostService,
  ) { 
    globalService.isReadingAPage = true
    postService.currentPost.pipe(take(1))
      .subscribe(currentPost => seoService.doSEO(currentPost))
  }

  ngOnDestroy() {
    this.globalService.isReadingAPage = false
  }
}
