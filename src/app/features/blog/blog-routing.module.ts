import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: BlogAboutComponent },
      { path: ':slug', component: BlogPostComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
