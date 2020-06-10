import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // For render all blog posts
  routes$ = this.scullyRoutes.available$.pipe(
    map((routes) => routes.filter((route) => route.route.includes('/blog'))),
  );

  constructor(private scullyRoutes: ScullyRoutesService) { }

}
