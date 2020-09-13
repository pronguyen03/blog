import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';


const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
    children: [
      { path: '', component: BlogHomeComponent },
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
