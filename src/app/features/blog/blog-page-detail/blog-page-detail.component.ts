import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-blog-page-detail',
  templateUrl: './blog-page-detail.component.html',
  styleUrls: ['./blog-page-detail.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogPageDetailComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
  }

}
