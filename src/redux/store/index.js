import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import adminReducer from "../reducer/cityReducer";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: storage,
  /* transforms: [encryptTransform({ secretKey: process.env.REACT_APP_PERSIST_KEY })],
  blacklist: [], */
};

const rootReducer = combineReducers({
  admin: adminReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  //reducer
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

export const persistor = persistStore(store);
