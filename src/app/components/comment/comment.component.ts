import {Component, Input} from "@angular/core";
import {CommentModel} from "../../core/models/comment/comment-model";

@Component({
  selector: 'app-component',
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment: CommentModel;
}
