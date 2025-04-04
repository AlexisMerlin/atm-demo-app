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
    screen: { primary: 'Welcome to the ATM' },
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
    screen: { primary: 'Please enter your PIN' },
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
    screen: { primary: '' },
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
    screen: { primary: 'Enter amount to withdraw' },
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
  deposit: {
    screen: { primary: 'Enter amount to deposit' },
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
  balance: {
    screen: { primary: '' },
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
    screen: { primary: 'Error' },
    buttons: [],
  },
};
