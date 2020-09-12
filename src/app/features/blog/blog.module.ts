import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home/home.component';
import { BlogNavigationComponent } from './blog-navigation/blog-navigation.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    BlogNavigationComponent,
    BlogFooterComponent,
    BlogSearchComponent,
    BlogCategoriesComponent,
    BlogAboutComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbCollapseModule
  ]
})
export class BlogModule { }
