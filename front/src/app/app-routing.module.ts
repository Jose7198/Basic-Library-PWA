import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './services/guard/guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate : [GuardService],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    canActivate : [GuardService],
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'authors', 
    canActivate : [GuardService], 
    loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsPageModule)
  },
  { 
    path: 'books',
    canActivate : [GuardService], 
    loadChildren: './authors/books/books.module#BooksPageModule' 
  },
  { 
    path: 'shop',
    canActivate : [GuardService], 
    loadChildren: './shop/shop.module#ShopPageModule' 
  },
  { 
    path: 'bills', 
    canActivate : [GuardService],
    loadChildren: './bills/bills.module#BillsPageModule' 
  },
  { 
    path: 'new-author', 
    canActivate : [GuardService],
    loadChildren: './authors/new-author/new-author.module#NewAuthorPageModule' 
  },
  { 
    path: 'new-book', 
    canActivate : [GuardService],
    loadChildren: './authors/books/new-book/new-book.module#NewBookPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
