import { Component } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { CATEGORIES } from '../constants';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  CATEGORIES = CATEGORIES
  // For render all blog posts
  routes$: Observable<ScullyRoute[]>

  constructor(
    routeService: RouteService,
    route: ActivatedRoute
  ) { 
    route.queryParamMap.subscribe(qM => {
      this.routes$ = routeService.getRoutes(qM.get('c'))
    })
  }
}
