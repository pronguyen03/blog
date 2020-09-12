import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about/about-me.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { BlogNavigationComponent } from './blog-navigation/blog-navigation.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

@NgModule({
  declarations: [
    BlogComponent,
    AboutMeComponent,
    HomeComponent,
    PostComponent,
    BlogNavigationComponent,
    BlogFooterComponent,
    BlogSearchComponent,
    BlogCategoriesComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
