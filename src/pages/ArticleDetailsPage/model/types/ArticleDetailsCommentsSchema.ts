import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "app/entities/Comment";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}