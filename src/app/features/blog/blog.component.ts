import { Component, OnInit } from '@angular/core';
import { MENUS, SITE_CONFIG } from '../../constants';
import { SEOService } from '../../services';

@Component({
  selector: 'app-blog',
  template: `
      <header>
      <h1>{{SITE_CONFIG.NAME}}</h1>
      <ng-container *ngFor="let M of MENUS; let i = index">
          <a routerLink="{{M.ROUTE}}">{{M.NAME}}</a> 
          <span *ngIf="i !== MENUS.length -1"> | </span>
      </ng-container>
    </header>

    <section id="main">
      <router-outlet></router-outlet>
    </section>

    <footer>
      <p [innerHTML]="SITE_CONFIG.COPYRIGHT"></p>
    </footer>
  `,
})
export class BlogComponent implements OnInit {
  SITE_CONFIG = SITE_CONFIG
  MENUS = MENUS

  constructor(seoService: SEOService) { 
    seoService.doSEO()
  }

  ngOnInit(): void {
  }

}
