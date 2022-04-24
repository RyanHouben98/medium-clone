import {HttpClient} from "@angular/common/http";
import {CommentMapper} from "../mappers/comment.mapper";
import {map, Observable} from "rxjs";
import {CommentModel} from "../models/comment/comment-model";
import {CommentEntity} from "../models/comment/comment-entity";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly apiUrl: string = 'api/comments/';
  private readonly mapper = new CommentMapper();

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getAllComments() : Observable<CommentModel[]> {
    return this.httpClient.get<CommentEntity[]>(this.apiUrl)
      .pipe(map(result => result.map(this.mapper.mapFrom)))
  }
}
