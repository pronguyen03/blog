import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from 'src/app/constants';
import { Category } from 'src/app/models';
import { PostService, SEOService } from '../../services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(
    public postService: PostService,
    route: ActivatedRoute,
    seoService: SEOService
  ) { 
    seoService.doSEO()

    route.queryParamMap.subscribe(qM => {
      let cat = this.getCategory(qM.get('c'))
      let searchTerm = qM.get('s')

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
