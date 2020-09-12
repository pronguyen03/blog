import { Component, OnInit } from '@angular/core';
import { MENUS, SITE_CONFIG } from '../../constants';
import { SEOService } from '../../services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
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
