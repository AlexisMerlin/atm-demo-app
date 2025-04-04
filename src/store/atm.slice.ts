import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * standby: the ATM is wating for user interaction
 * auth: the ATM is ready for user to enter PIN
 * waiting: the ATM is waiting for user to select an action
 * withdraw: the ATM is ready for user to enter amount to withdraw
 * deposit: the ATM is ready for user to enter amount to deposit
 * balance: the ATM is ready to show the balance
 * error: the ATM is in error state
 */
export type ATMState =
  | 'standby'
  | 'auth'
  | 'waiting'
  | 'withdraw'
  | 'deposit'
  | 'balance'
  | 'error';

interface AtmStateType {
  state: ATMState;
}

const initialState: AtmStateType = {
  state: 'standby',
};

export const atmSlice = createSlice({
  name: 'atm',
  initialState,
  reducers: {
    setAtmState: (state, action: PayloadAction<ATMState>) => {
      state.state = action.payload;
    },
  },
});

export const { setAtmState } = atmSlice.actions;
export const selectAtmState = (state: { atm: AtmStateType }) => state.atm.state;
export const isAtmInputState = (state: { atm: AtmStateType }) =>
  state.atm.state === 'auth' || state.atm.state === 'withdraw' || state.atm.state === 'deposit';
export default atmSlice.reducer;
