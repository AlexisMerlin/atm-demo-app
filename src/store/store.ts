import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './client.slice';
import screenReducer from './screen.slice';

export const store = configureStore({
  reducer: {
    client: clientReducer,
    screen: screenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
