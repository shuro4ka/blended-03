import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {usersReducer} from './users/slice';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
   ...getDefaultMiddleware({
      serielizableCheck: {
         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER],
      },
   }),
];

const persistConfig = {
   key: 'users',
   storage: storage,
   whitelist: ['users'],
};

export const store = configureStore({
   reducer: persistReducer(persistConfig, usersReducer),
   middleware,
   devTools: process.env.NODE_ENV === 'development',
  });
  export const persistor = persistStore(store);