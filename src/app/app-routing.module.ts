import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule) 
  },
  { 
    path: 'blog', 
    loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
