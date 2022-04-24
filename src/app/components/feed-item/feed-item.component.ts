import {Component, Input} from "@angular/core";
import {ArticleModel} from "../../core/models/article/article-model";
import {RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html'
})
export class FeedItemComponent {
  @Input() article: ArticleModel;
}
