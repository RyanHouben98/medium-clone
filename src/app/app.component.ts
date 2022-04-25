import {Component, OnInit} from '@angular/core';
import {ArticleService} from "./core/services/article.service";
import {devTools} from "@ngneat/elf-devtools";
import {CommentService} from "./core/services/comment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly articleService: ArticleService,
    private readonly commentService: CommentService,
  ) {
    devTools()
  }

  public async ngOnInit() {
    this.articleService.getAllArticles().subscribe()
    this.commentService.getAllComments().subscribe()
  }
}
