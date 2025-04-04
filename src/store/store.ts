import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './client.slice';
import uiReducer from './ui.slice';
import atmReducer from './atm.slice';
import { uiListenerMiddleware } from './uiMiddleware';
export const store = configureStore({
  reducer: {
    client: clientReducer,
    ui: uiReducer,
    atm: atmReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(uiListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
