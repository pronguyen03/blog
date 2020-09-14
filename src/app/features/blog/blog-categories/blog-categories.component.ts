import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from 'src/app/constants';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCategoriesComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  CATEGORIES = CATEGORIES
}
