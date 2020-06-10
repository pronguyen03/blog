import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, take } from 'rxjs/operators';
import { SEOService } from '../seo.service';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  // For render all blog posts in the navbar
  routes$ = this.scullyRoutes.available$.pipe(
    map((routes) => routes.filter((route) => route.route.includes('/blog'))),
  );

  ngOnInit() {}

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private scullyRoutes: ScullyRoutesService,
    private seoService: SEOService
  ) {
    // Do SEO for the current blog post
    scullyRoutes.getCurrent().pipe(take(1))
      .subscribe(route => {
        this.seoService.doSEO(route)
      })
  }
}
