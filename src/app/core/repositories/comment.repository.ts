import {Injectable} from "@angular/core";
import {createStore} from "@ngneat/elf";
import {selectManyByPredicate, setEntities, withEntities} from "@ngneat/elf-entities";
import {CommentModel} from "../models/comment/comment-model";

const commentStore = createStore(
  { name: 'comment' },
  withEntities<CommentModel>()
);

export const commentsByArticleId = (id:string) => commentStore.pipe(selectManyByPredicate((entity) => entity.articleId === id))

@Injectable({
  providedIn: 'root'
})
export class CommentRepository {
  public setComments(comments: CommentModel[]) {
    commentStore.update(setEntities(comments));
  }
}
