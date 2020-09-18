import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CONTACT_TEXT,
  EMAIL, 
  FACEBOOK_URL,
  FIRST_NAME,
  GITHUB_URL, 
  LAST_NAME,
  LINKEDIN_URL, 
  PORTFOLIO_INFO,
  TWITTER_URL
} from '../../../../../configuration';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  firstName = FIRST_NAME
  lastName = LAST_NAME
  jobTitle = PORTFOLIO_INFO.JOB_TITLE
  introduction = PORTFOLIO_INFO.INTRODUCTION

  email = EMAIL
  facebookUrl = FACEBOOK_URL
  githubUrl = GITHUB_URL
  twitterUrl = TWITTER_URL
  linkedinUrl = LINKEDIN_URL
  contactText = CONTACT_TEXT
}
