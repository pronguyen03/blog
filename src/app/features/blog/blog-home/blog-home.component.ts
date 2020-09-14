import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from 'src/app/constants';
import { Category } from 'src/app/models';
import { PostService, SEOService } from 'src/app/services';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent {
  constructor(
    public postService: PostService,
    route: ActivatedRoute,
    seoService: SEOService
  ) { 
    console.log('BlogHomeComponent constructor')
    seoService.doSEO()

    route.queryParamMap.subscribe(qM => {
      let cat = this.getCategory(qM.get('c'))
      let searchTerm = qM.get('s')

      console.log('BlogComponent params changes', cat, searchTerm)

      if (cat) {
        postService.filterByCategory(cat)
      }

      postService.search(searchTerm || '')
    })
  }

  private getCategory(key: string): Category|null {
    let filteredCats = CATEGORIES.filter(
      c => c.KEY.toLowerCase() == (key || '').toLowerCase()
    )
    return filteredCats.length ? filteredCats[0]:null
  }
}
