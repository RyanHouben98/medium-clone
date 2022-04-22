import {createStore} from "@ngneat/elf";
import {ArticleModel} from "../models/article/article-model";
import {
  addEntities,
  getEntity,
  hasEntity,
  selectAllEntities,
  selectEntity,
  setEntities,
  withEntities
} from "@ngneat/elf-entities";
import {Injectable} from "@angular/core";

const articleStore = createStore(
  { name: 'article' },
  withEntities<ArticleModel>()
);

export const articles$ = articleStore.pipe(selectAllEntities());
export const hasArticle = (id:string) => articleStore.query(hasEntity(id));
export const articleById$ = (id:string) => articleStore.pipe(selectEntity(id));

@Injectable({
  providedIn: 'root'
})
export class ArticleRepository {
  public setArticles(articles: ArticleModel[]) {
    articleStore.update(setEntities(articles));
  }

  public addArticle(article: ArticleModel) {
    articleStore.update(addEntities(article))
  }
}
