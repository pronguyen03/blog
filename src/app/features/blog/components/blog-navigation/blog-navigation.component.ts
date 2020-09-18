import { Component } from '@angular/core';
import { FIRST_NAME, LAST_NAME, MENUS } from '../../../../../../configuration';

@Component({
  selector: 'app-blog-navigation',
  templateUrl: './blog-navigation.component.html',
  styleUrls: ['./blog-navigation.component.scss']
})
export class BlogNavigationComponent {
  menus = MENUS
  isMenuCollapsed = true
  fullName = FIRST_NAME + ' ' + LAST_NAME
}
