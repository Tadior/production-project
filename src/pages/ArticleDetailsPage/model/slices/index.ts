import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../..';
import { articleDetailsRecommendationsReducer } from '../../model/slices/articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsComments';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
