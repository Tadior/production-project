import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "app/entities/Article";
import { CounterSchema } from "app/entities/Counter";
import { UserSchema } from "app/entities/User";
import { AxiosInstance } from "axios";
import { LoginSchema } from "features/AuthByUsername";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "features/addCommentForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ScrollSaveSchema } from "features/ScrollSave/types/ScrollSaveSchema";
import { rtkApi } from "shared/api/rtkApi";
import { ProfileSchema } from "features/editableProfileCard";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
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
