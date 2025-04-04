import { createListenerMiddleware } from '@reduxjs/toolkit';
import { ATMState, setAtmState } from './atm.slice';
import { setUIState, UiState } from './ui.slice';
export const uiListenerMiddleware = createListenerMiddleware();

uiListenerMiddleware.startListening({
  actionCreator: setAtmState,
  effect: (action, listenerApi) => {
    const nextState = action.payload;
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
        id: 'btn-7',
        label: 'Cancel',
        disabled: false,
        action: 'standby',
      },
    ],
  },
  waiting: {
    message: '',
    buttons: [
      {
        id: 'btn-4',
        label: 'Exit -',
        disabled: false,
        action: 'standby',
      },
      {
        id: 'btn-5',
        label: '- Withdraw',
        disabled: false,
        action: 'withdraw',
      },
      {
        id: 'btn-6',
        label: 'Balance -',
        disabled: false,
        action: 'balance',
      },
      {
        id: 'btn-7',
        label: '- Deposit',
        disabled: false,
        action: 'deposit',
      },
      {
        id: 'btn-8',
        label: 'Re Enter PIN -',
        disabled: false,
        action: 'auth',
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
    message: 'Balance',
    buttons: [
      {
        id: 'btn-4',
        label: 'Exit -',
        disabled: false,
        action: 'standby',
      },
      {
        id: 'btn-8',
        label: 'Back -',
        disabled: false,
        action: 'waiting',
      },
    ],
  },
  error: {
    message: 'An error occurred. Please restart.',
    buttons: [],
  },
};
