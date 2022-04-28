import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./core/components/register/register.component";
import {LoginComponent} from "./core/components/login/login.component";
import {FeedComponent} from "./modules/feed/components/feed/feed.component";
import {AuthRouteToHomeGuard} from "./core/guards/auth-route-to-home.guard";

const routes: Routes = [
  { path: '', component: FeedComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, canActivate: [AuthRouteToHomeGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthRouteToHomeGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
