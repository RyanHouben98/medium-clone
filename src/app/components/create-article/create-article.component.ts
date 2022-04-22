import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Editor, toHTML, Toolbar} from "ngx-editor";
import {ArticleEntity} from "../../core/models/article/article-entity";
import {UUID} from "angular2-uuid";
import {ArticleService} from "../../core/services/article.service";
import {ArticleRepository} from "../../core/repositories/article.repository";
import {DatePipe} from "@angular/common";
import {userName$} from "../../core/repositories/auth.repository";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html'
})
export class CreateArticleComponent implements OnInit, OnDestroy {

  private userName: string
  private subscription: Subscription;

  constructor(
    private readonly articleService: ArticleService,
    private readonly articleRepository: ArticleRepository,
    private readonly datePipe: DatePipe
  ) {
    this.subscription = userName$.subscribe(result => this.userName = result)
  }
  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    editorControl: new FormControl(null)
  });

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  editor: Editor;

  ngOnInit() : void {
    this.editor = new Editor()
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe()
    this.editor.destroy()
  }

  onSubmit() : void {
    let newArticle: ArticleEntity = {
      id: UUID.UUID(),
      headline: this.form.controls['title'].value,
      description: this.form.controls['description'].value,
      articleBody: toHTML(this.form.controls['editorControl'].value),
      createDate: this.datePipe.transform(Date.now(), 'MM-dd-yyyy'),
      author: this.userName
    }

    this.articleService.createArticle(newArticle).subscribe(
      result => this.articleRepository.addArticle(result)
    )

  }
}
