import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "./core/services/data.service";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxEditorModule} from "ngx-editor";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {DatePipe} from "@angular/common";
import {ArticleModule} from "./modules/article/article.module";
import {FeedModule} from "./modules/feed/feed.module";
import {CommentModule} from "./modules/comment/comment.module";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ArticleModule,
    FeedModule,
    CommentModule,
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
