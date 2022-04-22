import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ArticleModel} from "../models/article/article-model";
import {ArticleMapper} from "../mappers/article.mapper";
import {ArticleEntity} from "../models/article/article-entity";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly apiUrl: string = 'api/articles/';
  private readonly mapper = new ArticleMapper();

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getAllArticles() : Observable<ArticleModel[]> {
    return this.httpClient.get<ArticleEntity[]>(this.apiUrl)
      .pipe(map((result:ArticleEntity[]) => result.map(this.mapper.mapFrom)))
  }

  public createArticle(article: ArticleEntity) : Observable<ArticleModel> {
    return this.httpClient.post(this.apiUrl, article)
      .pipe(map(this.mapper.mapFrom))
  }
}
