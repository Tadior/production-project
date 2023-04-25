import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "app/entities/Article";
import { CounterSchema } from "app/entities/Counter";
import { ProfileSchema } from "app/entities/Profile";
import { UserSchema } from "app/entities/User";
import { AxiosInstance } from "axios";
import { LoginSchema } from "features/AuthByUsername";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "features/addCommentForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
