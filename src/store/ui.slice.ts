import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ATMState } from './atm.slice';

interface Button {
  id: string;
  label: string;
  disabled: boolean;
  action?: ATMState;
}

export interface UiState {
  message: string;
  buttons: Button[];
}

const initialState: UiState = {
  message: 'Welcome to the ATM',
  buttons: [
    {
      id: 'btn-8',
      disabled: false,
      label: 'Enter PIN',
      action: 'auth',
    },
  ],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    //Reducers for message may become unnecesary
    setScreenMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetScreenMessage: (state) => {
      state.message = initialState.message;
    },
    setUIState: (state, action: PayloadAction<UiState>) => {
      const newState = action.payload;
      state.message = newState.message;
      state.buttons = newState.buttons;
    },
  },
});

export const { resetScreenMessage, setScreenMessage, setUIState } = uiSlice.actions;
export const selectMessage = (state: RootState) => state.ui.message;
export const selectButtons = (state: RootState) => state.ui.buttons;
export const selectButtonById = (id: string) => (state: RootState) =>
  state.ui.buttons.find((btn) => btn.id === id);
export default uiSlice.reducer;
