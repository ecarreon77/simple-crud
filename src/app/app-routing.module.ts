import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then( b => b.BookModule)
  },
  {
    path: "book/form",
    component: BookFormComponent
  },
  {
    path: "blog",
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
  },
  {
    path: "blog/form",
    component: BlogFormComponent,
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(u => u.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
