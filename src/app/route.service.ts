import { Injectable } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private scullyRoutes: ScullyRoutesService) { }

  getRoutes(category?: string): Observable<ScullyRoute[]> {
    if (category) {
      return this.scullyRoutes.available$.pipe(
        map(routes => this.filterRoutes(routes, category))
      )
    }

    return this.scullyRoutes.available$.pipe(
      map((routes) => this.filterRoutes(routes)),
    );
  }

  getCurrent(): Observable<ScullyRoute> {
    return this.scullyRoutes.getCurrent()
  }

  private filterRoutes(
    routes: ScullyRoute[], 
    category?: string
  ): ScullyRoute[] {
    console.log(routes)
    let results = routes.filter(route => route.route.includes('/blog'))
      .sort((rA, rB) => {
        return new Date(rB.date).getTime() - new Date(rA.date).getTime()
      })

    console.log(results)

    return category ? 
      results.filter(route => {
        if (!route.categories) {
          return false
        }
        return route.categories.includes(category)
      }) : 
      results
  }
}
