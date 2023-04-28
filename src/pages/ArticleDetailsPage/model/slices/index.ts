import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import {
  articleDetailsRecommendationsReducer
} from "pages/ArticleDetailsPage/model/slices/articleDetailsRecommendationsSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsComments";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer
});