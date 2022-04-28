import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {CommentModel} from "../../../../core/models/comment/comment-model";
import {isLoggedIn$} from "../../../../core/repositories/auth.repository";
import {articleById$} from "../../../../core/repositories/article.repository";
import {ArticleModel} from "../../../../core/models/article/article-model";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {

  private readonly articleId: string;

  public comments: Observable<CommentModel[]>;
  public isAuthenticated: Observable<boolean> = isLoggedIn$;

  constructor(
    private readonly route: ActivatedRoute,
  ) {
    this.articleId = this.route.snapshot.paramMap.get("id")
  }

  public ngOnInit() : void {
    articleById$(this.articleId).subscribe((result:ArticleModel) => {
      this.comments = of(result.comments)
    })
  }
}
