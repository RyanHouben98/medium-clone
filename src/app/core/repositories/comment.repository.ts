import {createStore} from "@ngneat/elf";
import {
  getEntitiesCountByPredicate,
  selectManyByPredicate,
  setEntities,
  withEntities,
} from "@ngneat/elf-entities";
import {CommentModel} from "../models/comment/comment-model";

const commentStore = createStore(
  { name: 'comment' },
  withEntities<CommentModel>(),
);

/*
 * Comment queries
 */
export const commentsByArticleId$ = (id:string) => commentStore.pipe(selectManyByPredicate((entity:CommentModel) => entity.articleId === id))
export const countCommentsByArticleId$ = (id:string) => commentStore.query(getEntitiesCountByPredicate((entity:CommentModel) => entity.articleId === id))

export const getRepliesByCommentId$ = (id:string) => commentStore.pipe(selectManyByPredicate((entity:CommentModel) => entity.replyId === id))

/*
 * Comment mutations
 */
export function setComments(comments: CommentModel[]) {
  commentStore.update(setEntities(comments));
}

