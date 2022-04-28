import {createStore} from "@ngneat/elf";
import {
  getEntitiesCountByPredicate, selectAllEntities, selectMany,
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
export const currentComments$ = commentStore.pipe(selectAllEntities());

/*
 * Comment mutations
 */
export function setComments(comments: CommentModel[]) {
  commentStore.reset();
  commentStore.update(setEntities(comments));
}

