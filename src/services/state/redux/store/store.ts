import tokenReducer from '@/services/state/redux/store/reducers/tokenSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from '@/services/state/redux/store/reducers/toggleSidebarSlice';
import sideNavReducer from '@/services/state/redux/store/reducers/sideNavSlice';
import alertsReducer from '@/services/state/redux/store/reducers/alertsSlice';
import progressBarReducer from '@/services/state/redux/store/reducers/progressBarSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersonsApi } from '@/services/api/personsApi';
import { ViaCepApi } from '@/services/api/viaCepApi';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [PersonsApi.reducerPath]: PersonsApi.reducer,
  [ViaCepApi.reducerPath]: ViaCepApi.reducer,
  sideNav: sideNavReducer,
  toggleSidebar: toggleSidebarReducer,
  token: tokenReducer,
  alerts: alertsReducer,
  progressBar: progressBarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(PersonsApi.middleware, ViaCepApi.middleware),
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
