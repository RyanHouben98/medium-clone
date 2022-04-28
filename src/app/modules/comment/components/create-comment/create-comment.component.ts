import {Component, OnInit} from "@angular/core";
import {currentArticle$} from "../../../../core/repositories/article.repository";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentEntity} from "../../../../core/models/comment/comment-entity";
import {userName$} from "../../../../core/repositories/auth.repository";
import {CommentService} from "../../../../core/services/comment.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html'
})
export class CreateCommentComponent {
  private currentArticleId: string;
  private email: string

  form = new FormGroup({
    commentBody: new FormControl(null, Validators.required),
  });

  constructor(
    private readonly commentService: CommentService
  ) {
    currentArticle$.subscribe(result => {
      this.currentArticleId = result.id
    })

    userName$.subscribe(result => {
      this.email = result
    })
  }

  public onSubmit() {
    let createCommentResult: CommentEntity = {
      id: '',
      articleId: this.currentArticleId,
      commentBody: this.form.controls['commentBody'].value,
      author: this.email
    }

    this.commentService.createComment(createCommentResult).subscribe()
  }
}

