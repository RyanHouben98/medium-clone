import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html'
})
export class CreateCommentComponent {
  @Input() respondId: string;
}
