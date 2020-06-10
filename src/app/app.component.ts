import { Component } from '@angular/core';
import { SEOService } from './seo.service';
import { SITE_CONFIG } from './site.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  SITE_CONFIG = SITE_CONFIG
  constructor(seoService: SEOService) { 
    // Do SEO with default data
    seoService.doSEO()
  }
}
