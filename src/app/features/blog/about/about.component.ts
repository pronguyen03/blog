import { Component } from '@angular/core';
import { SITE_CONFIG } from '../site.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  SITE_CONFIG = SITE_CONFIG
}
