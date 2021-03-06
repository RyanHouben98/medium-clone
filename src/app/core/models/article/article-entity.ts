import {CommentEntity} from "../comment/comment-entity";

export interface ArticleEntity {
  id: string;
  headline: string;
  description: string;
  articleBody: string;
  author: string;
  createDate: string;
}
