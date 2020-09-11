import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG } from '../../constants';
import { SEOService } from '../../services';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  constructor(seoService: SEOService) { 
    seoService.doSEO({
      title: 'Nhan Nguyen - ' + SITE_CONFIG.JOB_TITLE,
      description: SITE_CONFIG.PORTFOLIO_DESC,
      image: SITE_CONFIG.PORTFOLIO_IMAGE
    })
  }

}
