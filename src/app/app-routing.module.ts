import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
// import {AuthGuard} from './auth/auth-guard.service';
const routes: Routes = [
  {path : '', redirectTo : 'auth', pathMatch : 'full'},
  {path : 'auth', loadChildren : './auth/auth.module#AuthModule'},
  // {path : 'admin', loadChildren : '', canActivate : [AuthGuard]},
  // {path : 'publisher', loadChildren : '', canActivate : [AuthGuard]},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
