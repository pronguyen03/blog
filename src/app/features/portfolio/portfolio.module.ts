import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBloggerB, faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';


@NgModule({
  declarations: [
    PortfolioComponent, 
    NavigationComponent, 
    AboutComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FontAwesomeModule
  ]
})
export class PortfolioModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedinIn, faFacebookF, faTwitter, faBloggerB);
  }
}
