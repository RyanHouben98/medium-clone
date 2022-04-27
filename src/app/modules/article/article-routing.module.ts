import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./components/article/article.component";
import {ArticleAuthorListComponent} from "./components/article-author-list/article-author-list.component";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  { path: 'new-article', component: CreateArticleComponent, canActivate: [AuthGuard] },
  { path: ':author', component: ArticleAuthorListComponent },
  { path: ':author/:id', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ArticleRoutingModule { }
