import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "./core/services/data.service";
import {FeedComponent} from "./components/feed/feed.component";
import {FeedItemComponent} from "./components/feed-item/feed-item.component";
import {ArticleComponent} from "./components/article/article.component";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxEditorModule} from "ngx-editor";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {DatePipe} from "@angular/common";
import {AuthorArticleListComponent} from "./components/auther-article-list/author-article-list.component";
import {CommentListComponent} from "./components/comment-list/comment-list.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CreateCommentComponent} from "./components/create-comment/create-comment.component";


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedItemComponent,
    ArticleComponent,
    CreateArticleComponent,
    RegisterComponent,
    LoginComponent,
    AuthorArticleListComponent,
    CommentListComponent,
    CommentComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    NgxEditorModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
