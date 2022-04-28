import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {CommentModel} from "../../../../core/models/comment/comment-model";
import {isLoggedIn$} from "../../../../core/repositories/auth.repository";
import {CommentService} from "../../../../core/services/comment.service";
import {currentComments$} from "../../../../core/repositories/comment.repository";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {

  private readonly articleId: string;

  public comments: Observable<CommentModel[]> = currentComments$;
  public isAuthenticated: Observable<boolean> = isLoggedIn$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly commentService: CommentService
  ) {
    this.articleId = this.route.snapshot.paramMap.get("id")
  }

  public ngOnInit() : void {
    this.commentService.getCommentsByArticle(this.articleId).subscribe()
  }
}
