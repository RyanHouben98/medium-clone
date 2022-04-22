import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {ArticleEntity} from "../models/article/article-entity";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    const articles: ArticleEntity[] = [
      {
        id: '1',
        headline: 'My first article',
        description: 'Just a small description of my headline',
        articleBody: 'BOdy goes here',
        author: "Ryan Houben",
        createDate: '21-04-2022'
      }
    ]

    return {articles:articles}
  }

}
