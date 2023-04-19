import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
  text: "",
  error: ""
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticleById.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(
  //       fetchArticleById.fulfilled,
  //       (state, action: PayloadAction<Article>) => {
  //         state.isLoading = false;
  //         state.data = action.payload;
  //       }
  //     )
  //     .addCase(fetchArticleById.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload?.toString();
  //     });
  // }
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;

export const { reducer: addCommentFormReducer } = addCommentFormSlice;