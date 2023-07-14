import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthSlice from '~/redux/slices/AuthSlice';
import { ProjectApi } from '~/services/query';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ProjectApi'],
};
const rootReducer = combineReducers({
  auth: AuthSlice,
  [ProjectApi.reducerPath]: ProjectApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ProjectApi.middleware),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
