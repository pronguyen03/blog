import { Component } from '@angular/core';
import { SITE_CONFIG } from 'src/app/constants';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.scss']
})
export class BlogFooterComponent {
  copyrightText = SITE_CONFIG.COPYRIGHT
}
