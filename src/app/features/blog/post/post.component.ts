import { Component, OnInit } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { SITE_CONFIG } from 'src/app/constants';
import { RouteService, SEOService } from 'src/app/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  // // For related blog posts in the navbar
  // routes$s: Observable<ScullyRoute[]>[] = []
  // SITE_CONFIG = SITE_CONFIG

  // constructor(
  //   private seoService: SEOService,
  //   private routeService: RouteService
  // ) {
  //   routeService.getCurrent().pipe(take(1))
  //     .subscribe(route => {
  //       // Do SEO for the current blog post
  //       this.seoService.doSEO(route)

  //       this.getRelatedPosts(route)
  //     })
  // }

  // ngOnInit(): void {
  // }

  // /**
  //  * For related blog posts in the navbar 
  //  * All posts have the same category with current post 
  //  * A post can belong to multiple categories
  //  */
  // private getRelatedPosts(route: ScullyRoute) {
  //   if (!(route.categories as string)) {
  //     return 
  //   }

  //   let categories = (route.categories as string)
  //     .split(',')
  //     .filter(c => c.trim()) // remove all blanks

  //   categories.forEach(c => this.routes$s.push(this.routeService.getRoutes(c)))
  // }

}
