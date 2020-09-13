import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-filters-info',
  templateUrl: './filters-info.component.html',
  styleUrls: ['./filters-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersInfoComponent {
  @Input() category: Category
  @Input() searchTerm: string
}
