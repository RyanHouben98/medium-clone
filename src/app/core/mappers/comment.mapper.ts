import {Mapper} from "../base/mapper";
import {CommentEntity} from "../models/comment/comment-entity";
import {CommentModel} from "../models/comment/comment-model";

export class CommentMapper extends Mapper<CommentEntity, CommentModel> {
  mapFrom(param: CommentEntity): CommentModel {
    return {
      id: param.id,
      commentBody: param.commentBody,
      author: param.author,
      articleId: param.articleId
    }
  }

  mapTo(param: CommentModel): CommentEntity {
    return {
      id: param.id,
      commentBody: param.commentBody,
      author: param.author,
      articleId: param.articleId
    }
  }

}
