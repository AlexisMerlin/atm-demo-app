import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ScreenState {
  message: string;
}

const initialState: ScreenState = {
  message: 'Welcome to the ATM',
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreenMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetScreenMessage: (state) => {
      state.message = initialState.message;
    },
  },
});

export const { resetScreenMessage, setScreenMessage } = screenSlice.actions;
export const selectMessage = (state: RootState) => state.screen.message;
export default screenSlice.reducer;
