import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type { ReduxStoreWithManager, StateSchema, StateSchemaKey, ThunkConfig } from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore
};
export type { AppDispatch, StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager };
