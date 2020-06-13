import { Component } from '@angular/core';
import { SEOService } from './seo.service';
import { SITE_CONFIG } from './site.config';
import { MENUS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  SITE_CONFIG = SITE_CONFIG
  MENUS = MENUS
  constructor(seoService: SEOService) { 
    // Do SEO with default data
    seoService.doSEO()
  }
}
