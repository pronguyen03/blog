import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FIRST_NAME, LAST_NAME, PORTFOLIO_INFO } from '../../../../configuration/site-configs';
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
      title: FIRST_NAME+' '+LAST_NAME+' - '+PORTFOLIO_INFO.JOB_TITLE,
      description: PORTFOLIO_INFO.INTRODUCTION,
      image: PORTFOLIO_INFO.SHARE_IMAGE,
      route: ''
    })
  }

}
