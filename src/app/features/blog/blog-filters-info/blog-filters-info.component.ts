import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-blog-filters-info',
  templateUrl: './blog-filters-info.component.html',
  styleUrls: ['./blog-filters-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogFiltersInfoComponent {
  @Input() category: Category
  @Input() searchTerm: string
}
