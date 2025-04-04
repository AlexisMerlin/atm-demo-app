import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ATMState } from './atm.slice';

interface Button {
  id: string;
  label: string;
  disabled: boolean;
  action?: ATMState;
}

interface Screen {
  primary: string;
  secondary?: string;
}

export interface UiState {
  screen: Screen;
  buttons: Button[];
}

const initialState: UiState = {
  screen: {
    primary: 'Welcome to the ATM',
  },
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
    setScreenMessage: (state, action: PayloadAction<Screen>) => {
      state.screen = action.payload;
    },
    setUIState: (state, action: PayloadAction<UiState>) => {
      const newState = action.payload;
      state.screen = newState.screen;
      state.buttons = newState.buttons;
    },
  },
});

export const { setScreenMessage, setUIState } = uiSlice.actions;
export const selectMessage = (state: RootState) => state.ui.screen;
export const selectButtons = (state: RootState) => state.ui.buttons;
export const selectButtonById = (id: string) => (state: RootState) =>
  state.ui.buttons.find((btn) => btn.id === id);
export default uiSlice.reducer;
