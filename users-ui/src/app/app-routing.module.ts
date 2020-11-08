import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path : "", component : UserListComponent },
  { path : "users/:id", component : UserComponent },
  { path : "**", component :  ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
