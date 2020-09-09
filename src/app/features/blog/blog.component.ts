import { Component, OnInit } from '@angular/core';
import { MENUS } from 'src/app/constants/constants';
import { SITE_CONFIG } from 'src/app/constants/site.config';

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
  styles: [
  ]
})
export class BlogComponent implements OnInit {
  SITE_CONFIG = SITE_CONFIG
  MENUS = MENUS

  constructor() { }

  ngOnInit(): void {
  }

}
