import {CommentModel} from "../comment/comment-model";

export interface ArticleModel {
  id: string;
  headline: string;
  description: string;
  articleBody: string;
  author: string;
  createDate: string;
}
