import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapters/chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./chapters/chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  },
  {
    path: 'chapter3',
    loadChildren: () => import('./chapters/chapter3/chapter3.module').then( m => m.Chapter3PageModule)
  },
  {
    path: 'chapter4',
    loadChildren: () => import('./chapters/chapter4/chapter4.module').then( m => m.Chapter4PageModule)
  },
  {
    path: 'chapter5',
    loadChildren: () => import('./chapters/chapter5/chapter5.module').then( m => m.Chapter5PageModule)
  }



  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
