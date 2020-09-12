import { Component, OnInit } from '@angular/core';
import { SITE_CONFIG } from 'src/app/constants';

@Component({
  selector: 'app-blog-about',
  templateUrl: './blog-about.component.html',
  styleUrls: ['./blog-about.component.scss']
})
export class BlogAboutComponent implements OnInit {
  SITE_CONFIG = SITE_CONFIG

  constructor() { }

  ngOnInit(): void {
  }

}
