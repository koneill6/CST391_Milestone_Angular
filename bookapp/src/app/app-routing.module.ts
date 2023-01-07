import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBooksComponent } from './list-book/list-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: 'create', component: CreateBookComponent },
  { path: 'list-books', component: ListBooksComponent },
  { path: 'edit/:id', component: EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
