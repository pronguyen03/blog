import { Component } from '@angular/core';
import { SEOService } from '../../services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(seoService: SEOService) { 
    seoService.doSEO()
  }
}
