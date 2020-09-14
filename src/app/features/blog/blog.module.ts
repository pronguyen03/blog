import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogFiltersInfoComponent } from './blog-filters-info/blog-filters-info.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostItemComponent } from './blog-home/blog-post-item/blog-post-item.component';
import { BlogNavigationComponent } from './blog-navigation/blog-navigation.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogRelatedPostsComponent } from './blog-related-posts/blog-related-posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogHomeComponent,
    BlogNavigationComponent,
    BlogFooterComponent,
    BlogSearchComponent,
    BlogCategoriesComponent,
    BlogAboutComponent,
    BlogPostComponent,
    BlogPostItemComponent,
    BlogFiltersInfoComponent,
    BlogRelatedPostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbCollapseModule,
    FormsModule,
    FontAwesomeModule,
    ScullyLibModule
  ]
})
export class BlogModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faSearch);
  }
}
