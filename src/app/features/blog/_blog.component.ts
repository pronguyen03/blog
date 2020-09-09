import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map, take } from 'rxjs/operators';
import { SEOService } from '../seo.service';
import { Observable } from 'rxjs';
import { RouteService } from '../route.service';
import { SITE_CONFIG } from '../site.config';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  // For related blog posts in the navbar
  routes$s: Observable<ScullyRoute[]>[] = []
  SITE_CONFIG = SITE_CONFIG

  ngOnInit() {}

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private seoService: SEOService,
    private routeService: RouteService
  ) {
    routeService.getCurrent().pipe(take(1))
      .subscribe(route => {
        // Do SEO for the current blog post
        this.seoService.doSEO(route)

        this.getRelatedPosts(route)
      })
  }

  /**
   * For related blog posts in the navbar 
   * All posts have the same category with current post 
   * A post can belong to multiple categories
   */
  private getRelatedPosts(route: ScullyRoute) {
    if (!(route.categories as string)) {
      return 
    }

    let categories = (route.categories as string)
      .split(',')
      .filter(c => c.trim()) // remove all blanks

    categories.forEach(c => this.routes$s.push(this.routeService.getRoutes(c)))
  }
}
