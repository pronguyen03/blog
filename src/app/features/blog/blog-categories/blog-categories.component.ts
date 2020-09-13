import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from 'src/app/constants';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {
  constructor(private route: ActivatedRoute) {}
  CATEGORIES = CATEGORIES

  getFullQuery(category: Category): Object {
    return {
      ...this.route.snapshot.queryParams,
      c: category.KEY || null
    }
  }
}
