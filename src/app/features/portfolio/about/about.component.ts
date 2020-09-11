import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG } from '../../../constants';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  SITE_CONFIG = SITE_CONFIG
}
