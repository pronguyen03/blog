import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PORTFOLIO_INFO } from '../../../../../configuration/site-configs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  profileImage = PORTFOLIO_INFO.PROFILE_IMAGE
}
