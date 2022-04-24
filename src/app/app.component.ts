import {Component, OnInit} from '@angular/core';
import {ArticleRepository} from "./core/repositories/article.repository";
import {ArticleService} from "./core/services/article.service";
import {devTools} from "@ngneat/elf-devtools";
import {CommentService} from "./core/services/comment.service";
import {CommentRepository} from "./core/repositories/comment.repository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly articleService: ArticleService,
    private readonly articleRepository: ArticleRepository,
    private readonly commentService: CommentService,
    private readonly commentRepository: CommentRepository
  ) {
    devTools()
  }

  public async ngOnInit() {
    this.articleService.getAllArticles().subscribe(
      result => this.articleRepository.setArticles(result)
    )

    this.commentService.getAllComments().subscribe(
      result => this.commentRepository.setComments(result)
    )
  }
}
