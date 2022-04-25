export interface CommentModel {
  id: string;
  commentBody: string;
  author: string;
  articleId?: string;
  replyId?: string;
}
