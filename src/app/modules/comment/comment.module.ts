import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentListComponent} from "./components/comment-list/comment-list.component";
import {CreateCommentComponent} from "./components/create-comment/create-comment.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommentComponent,
    CommentListComponent,
    CreateCommentComponent
  ],
  exports: [
    CommentListComponent
  ],
})
export class CommentModule { }
