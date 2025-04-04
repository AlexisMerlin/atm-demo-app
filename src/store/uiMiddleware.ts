import { createListenerMiddleware } from '@reduxjs/toolkit';
import { ATMState, setAtmState } from './atm.slice';
import { setUIState, UiState } from './ui.slice';
export const uiListenerMiddleware = createListenerMiddleware();

uiListenerMiddleware.startListening({
  actionCreator: setAtmState,
  effect: (action, listenerApi) => {
    const nextState = action.payload;
    console.log('ATM state changed to:', nextState);
    const uiSate = uiStateByATMState[nextState];
    listenerApi.dispatch(setUIState(uiSate));
  },
});

const uiStateByATMState: Record<ATMState, UiState> = {
  standby: {
    message: 'Welcome to the ATM',
    buttons: [
      {
        id: 'btn-8',
        label: 'Enter PIN',
        disabled: false,
        action: 'auth',
      },
    ],
  },
  auth: {
    message: 'Please enter your PIN',
    buttons: [
      {
        id: 'btn-1',
        label: 'Cancel',
        disabled: false,
        action: 'standby',
      },
    ],
  },
  waiting: {
    message: 'Select a transaction',
    buttons: [
      {
        id: 'btn-2',
        label: 'Withdraw',
        disabled: false,
      },
      {
        id: 'btn-3',
        label: 'Deposit',
        disabled: false,
      },
      {
        id: 'btn-4',
        label: 'Balance',
        disabled: false,
      },
    ],
  },
  withdraw: {
    message: 'Enter amount to withdraw',
    buttons: [],
  },
  deposit: {
    message: 'Enter amount to deposit',
    buttons: [],
  },
  balance: {
    message: 'Your balance is being retrieved',
    buttons: [],
  },
  error: {
    message: 'An error occurred. Please restart.',
    buttons: [],
  },
};
