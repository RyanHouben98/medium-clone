import {Component, OnInit} from "@angular/core";
import {Observable, tap} from "rxjs";
import {ArticleModel} from "../../../../core/models/article/article-model";
import {ActivatedRoute} from "@angular/router";
import {articleById$, setCurrentArticle} from "../../../../core/repositories/article.repository";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  private readonly id: string;

  public article: Observable<ArticleModel>;

  constructor(
    private readonly route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() : void {
    this.article = articleById$(this.id)
    this.article.subscribe(
      result => setCurrentArticle(result)
    )
  }
}
