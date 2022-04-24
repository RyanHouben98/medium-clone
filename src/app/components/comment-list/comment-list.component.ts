import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {isLoggedIn$} from "../../core/repositories/auth.repository";
import {CommentModel} from "../../core/models/comment/comment-model";
import {ActivatedRoute, Router} from "@angular/router";
import {commentsByArticleId} from "../../core/repositories/comment.repository";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent {
  public isLoggedIn: Observable<boolean> = isLoggedIn$;
  public comments: Observable<CommentModel[]>;

  private readonly id: string;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get("id")

    this.comments = commentsByArticleId(this.id);
  }


}
