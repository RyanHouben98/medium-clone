import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedComponent} from "./components/feed/feed.component";
import {ArticleComponent} from "./components/article/article.component";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./components/guards/auth.guard";

const routes: Routes = [
  { path: '', component: FeedComponent, pathMatch: 'full' },
  { path: 'new-article', component: CreateArticleComponent, canActivate: [AuthGuard]},
  { path: 'article/:author/:id', component: ArticleComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
