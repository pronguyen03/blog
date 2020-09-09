import { Component } from '@angular/core';
import { SEOService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(seoService: SEOService) { 
    // Do SEO with default data
    seoService.doSEO()
  }
}
