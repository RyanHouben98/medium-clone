import {NgModule} from "@angular/core";
import {ArticleComponent} from "./components/article/article.component";
import {ArticleAuthorListComponent} from "./components/article-author-list/article-author-list.component";
import {CommonModule} from "@angular/common";
import {ArticleRoutingModule} from "./article-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxEditorModule} from "ngx-editor";

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxEditorModule,
  ],
  declarations: [
    ArticleComponent,
    ArticleAuthorListComponent,
    CreateArticleComponent
  ]
})
export class ArticleModule { }
