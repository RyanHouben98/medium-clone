import {createStore, select, withProps} from "@ngneat/elf";
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
  withProps<{currentArticle: ArticleModel}>({ currentArticle: null })
);

/*
 * Article queries
 */
export const articles$ = articleStore.pipe(selectAllEntities());
export const currentArticle$ = articleStore.pipe(select((entity) => entity.currentArticle))
export const articlesByAuthor$ = (author:string) => articleStore.pipe(selectManyByPredicate((entity) => entity.author === author))
export const articleById$ = (id:string) => articleStore.pipe(selectEntity(id));

/*
 * Article mutations
 */
export function setArticles(articles: ArticleModel[]) {
  articleStore.update(
    setEntities(articles),
  )
}

export function setCurrentArticle(article: ArticleModel) {
  articleStore.update((state) => ({
    ...state,
    currentArticle: article
  }))
}

export function addArticle(article: ArticleModel) {
  articleStore.update(addEntities(article))
}

