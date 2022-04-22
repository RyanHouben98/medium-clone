import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {ArticleModel} from "../../core/models/article/article-model";
import {articles$} from "../../core/repositories/article.repository";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent {
  public articles: Observable<ArticleModel[]> = articles$;
}
