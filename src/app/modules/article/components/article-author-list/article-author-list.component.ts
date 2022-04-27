import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {ArticleModel} from "../../../../core/models/article/article-model";
import {ActivatedRoute} from "@angular/router";
import {articlesByAuthor$} from "../../../../core/repositories/article.repository";

@Component({
  selector: 'app-article-author-list',
  templateUrl: 'article-author-list.component.html'
})
export class ArticleAuthorListComponent {
  public author: string;
  public articles: Observable<ArticleModel[]>;

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.author = this.route.snapshot.paramMap.get('author')
    this.articles = articlesByAuthor$(this.author);
  }
}
