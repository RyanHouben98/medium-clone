import {Mapper} from "../base/mapper";
import {ArticleEntity} from "../models/article/article-entity";
import {ArticleModel} from "../models/article/article-model";

export class ArticleMapper extends Mapper<ArticleEntity, ArticleModel> {
  mapFrom(param: ArticleEntity): ArticleModel {
    return {
      id: param.id,
      headline: param.headline,
      description: param.description,
      author: param.author,
      createDate: param.createDate,
      articleBody: param.articleBody
    }
  }

  mapTo(param: ArticleModel): ArticleEntity {
    return {
      id: param.id,
      headline: param.headline,
      description: param.description,
      author: param.author,
      createDate: param.createDate,
      articleBody: param.articleBody
    }
  }

}
