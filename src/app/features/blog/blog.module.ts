import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home/home.component';
import { BlogNavigationComponent } from './blog-navigation/blog-navigation.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PostItemComponent } from './home/post-item/post-item.component';
import { FormsModule } from '@angular/forms';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    BlogNavigationComponent,
    BlogFooterComponent,
    BlogSearchComponent,
    BlogCategoriesComponent,
    BlogAboutComponent,
    BlogPostComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbCollapseModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class BlogModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faSearch);
  }
}
