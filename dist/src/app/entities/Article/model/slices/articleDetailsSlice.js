import { createSlice } from "@reduxjs/toolkit";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
var initialState = {
    isLoading: false,
    error: undefined,
    data: undefined,
};
export var articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleById.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleById.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
        })
            .addCase(fetchArticleById.rejected, function (state, action) {
            var _a;
            state.isLoading = false;
            state.error = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.toString();
        });
    },
});
// Action creators are generated for each case reducer function
export var articleDetailsActions = articleDetailsSlice.actions;
export var articleDetailsReducer = articleDetailsSlice.reducer;
