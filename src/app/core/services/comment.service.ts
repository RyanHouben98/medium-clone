import {HttpClient} from "@angular/common/http";
import {CommentMapper} from "../mappers/comment.mapper";
import {map, Observable} from "rxjs";
import {CommentEntity} from "../models/comment/comment-entity";
import {Injectable} from "@angular/core";
import {addComment, setComments} from "../repositories/comment.repository";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly apiUrl: string = 'https://626a762453916a0fbdfbf158.mockapi.io/api/v1/';
  private readonly mapper = new CommentMapper();

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public getCommentsByArticle(id: string) : Observable<void> {
    return this.httpClient.get<CommentEntity[]>(this.apiUrl + 'articles/' + id + '/comments')
      .pipe(map(result => result.map(this.mapper.mapFrom)))
      .pipe(map(setComments))
  }

  public createComment(comment: CommentEntity) : Observable<any> {
    return this.httpClient.post<CommentEntity>(this.apiUrl + 'articles/' + comment.articleId + '/comments', comment)
      .pipe(map(this.mapper.mapFrom))
      .pipe(map(addComment))
  }
}
