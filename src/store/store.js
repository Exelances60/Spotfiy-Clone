import logger from "redux-logger";
import { rootReducer } from "../store/root.reducer";
import { configureStore } from "@reduxjs/toolkit";

/* const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares)); */

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
