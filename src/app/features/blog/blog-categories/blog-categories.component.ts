import { Component } from '@angular/core';
import { CATEGORIES } from 'src/app/constants';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {
  CATEGORIES = CATEGORIES
}
