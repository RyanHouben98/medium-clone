import {Component, OnInit} from '@angular/core';
import {ArticleRepository} from "./core/repositories/article.repository";
import {ArticleService} from "./core/services/article.service";
import {devTools} from "@ngneat/elf-devtools";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly articleService: ArticleService,
    private readonly articleRepository: ArticleRepository
  ) {
    devTools()
  }

  public async ngOnInit() {
    this.articleService.getAllArticles().subscribe(
      result => this.articleRepository.setArticles(result)
    )
  }
}
