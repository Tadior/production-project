import { Story } from "@storybook/react";
import { profileReducer } from "app/entities/Profile";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "app/entities/Article/model/slices/articleDetailsSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slices";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
      (
        <StoreProvider
          initialState={state}
          asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
          <StoryComponent />
        </StoreProvider>
      );
