import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ArticleModule} from "../../../article/article.module";
import {commentsByArticleId$} from "../../../../core/repositories/comment.repository";
import {CommentModel} from "../../../../core/models/comment/comment-model";
import {isLoggedIn$} from "../../../../core/repositories/auth.repository";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {

  private readonly articleId: string;

  public comments: Observable<CommentModel[]>;
  public isAuthenticated: Observable<boolean> = isLoggedIn$;

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.articleId = this.route.snapshot.paramMap.get("id")
  }

  public ngOnInit() : void {
    this.comments = commentsByArticleId$(this.articleId)
  }
}
