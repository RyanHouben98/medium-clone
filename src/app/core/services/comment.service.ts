import {HttpClient} from "@angular/common/http";
import {CommentMapper} from "../mappers/comment.mapper";
import {map, Observable} from "rxjs";
import {CommentEntity} from "../models/comment/comment-entity";
import {Injectable} from "@angular/core";
import {setComments} from "../repositories/comment.repository";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly apiUrl: string = 'api/comments/';
  private readonly mapper = new CommentMapper();

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public getAllComments() : Observable<void> {
    return this.httpClient.get<CommentEntity[]>(this.apiUrl)
      .pipe(map(result => result.map(this.mapper.mapFrom)))
      .pipe(map(setComments))
  }
}
