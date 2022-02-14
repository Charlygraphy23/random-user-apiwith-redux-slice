import { configureStore } from "@reduxjs/toolkit";
import radomUserReducer from "./reducers/users";

const store = configureStore({
  reducer: {
    RadomUserReducer: radomUserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
export type StoreType = ReturnType<typeof store.getState>;
