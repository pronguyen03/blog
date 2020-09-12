import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about/about-me.component';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutMeComponent },
      { path: ':slug', component: PostComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
