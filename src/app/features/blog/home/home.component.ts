import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from 'src/app/constants';
import { Category } from 'src/app/models';
import { PostService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public postService: PostService,
    route: ActivatedRoute
  ) { 
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
