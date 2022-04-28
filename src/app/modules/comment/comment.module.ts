import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentListComponent} from "./components/comment-list/comment-list.component";
import {CreateCommentComponent} from "./components/create-comment/create-comment.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
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
