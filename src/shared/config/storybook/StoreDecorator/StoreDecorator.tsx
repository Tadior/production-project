import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import "@/app/styles/index.scss";
// eslint-disable-next-line fsd-path-checker-by-tadior/public-api-imports
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/app/entities/Article/model/slices/articleDetailsSlice";
// eslint-disable-next-line fsd-path-checker-by-tadior/public-api-imports
import { addCommentFormReducer } from "@/features/addCommentForm/model/slices/addCommentFormSlice";
// eslint-disable-next-line fsd-path-checker-by-tadior/public-api-imports
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
// eslint-disable-next-line fsd-path-checker-by-tadior/public-api-imports
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";

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
