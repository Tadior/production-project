var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { configureStore, } from "@reduxjs/toolkit";
import { counterReducer } from "app/entities/Counter";
import { userReducer } from "app/entities/User";
import { $api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
export function createReduxStore(initialState, asyncReducers, navigate) {
    var rootReducers = __assign(__assign({}, asyncReducers), { counter: counterReducer, user: userReducer });
    var reducerManager = createReducerManager(rootReducers);
    var extraArg = {
        api: $api,
        navigate: navigate,
    };
    var store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            });
        },
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
