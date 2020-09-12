import { Component } from '@angular/core';
import { MENUS, SITE_CONFIG } from 'src/app/constants';

@Component({
  selector: 'app-blog-navigation',
  templateUrl: './blog-navigation.component.html',
  styleUrls: ['./blog-navigation.component.scss']
})
export class BlogNavigationComponent {
  SITE_CONFIG = SITE_CONFIG
  MENUS = MENUS
  isMenuCollapsed = true
}
