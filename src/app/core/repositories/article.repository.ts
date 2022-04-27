import {createStore} from "@ngneat/elf";
import {ArticleModel} from "../models/article/article-model";
import {
  addEntities,
  hasEntity,
  selectAllEntities,
  selectEntity,
  selectManyByPredicate,
  setEntities,
  withEntities
} from "@ngneat/elf-entities";

const articleStore = createStore(
  { name: 'article' },
  withEntities<ArticleModel>(),
);

/*
 * Article queries
 */
export const articles$ = articleStore.pipe(selectAllEntities());
export const articlesByAuthor$ = (author:string) => articleStore.pipe(selectManyByPredicate((entity) => entity.author === author))
export const hasArticle = (id:string) => articleStore.query(hasEntity(id));
export const articleById$ = (id:string) => articleStore.pipe(selectEntity(id));

/*
 * Article mutations
 */
export function setArticles(articles: ArticleModel[]) {
  articleStore.update(
    setEntities(articles),
  )
}

export function addArticle(article: ArticleModel) {
  articleStore.update(addEntities(article))
}

