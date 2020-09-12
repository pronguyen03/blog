import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../../constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  SITE_CONFIG = SITE_CONFIG
}
