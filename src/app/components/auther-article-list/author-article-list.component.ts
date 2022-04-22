import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ArticleModel} from "../../core/models/article/article-model";
import {articlesByAuthor$} from "../../core/repositories/article.repository";

@Component({
  selector: 'app-author-article-list',
  templateUrl: './auther-article-list.component.html'
})
export class AuthorArticleListComponent {

  public author: string;
  public articles: Observable<ArticleModel[]>;

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.author = this.route.snapshot.paramMap.get('author')
    this.articles = articlesByAuthor$(this.author);
  }
}
