export interface CommentEntity {
  id: string;
  commentBody: string;
  author: string;
  articleId?: string;
  replyId?: string;
}
