import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findClient } from './mockData';
import { EnumCardType } from '@/types/EnumCardType';
import { RootState } from './store';

//TODO remove export when connecting to backend
export interface Client {
  id: string;
  name: string;
  balance: number;
  cardType: EnumCardType;
}

interface ClientError {
  errorType: 'auth' | 'withdraw' | 'deposit' | 'balance';
  message: string;
}

interface ClientState {
  currentClient: Client | null;
  error: ClientError | null;
}

const initialState: ClientState = {
  currentClient: null,
  error: null,
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<string>) => {
      try {
        const client = findClient(action.payload);
        state.currentClient = client;
      } catch (error) {
        console.log(`Error ${error}`);
        const clientError: ClientError = {
          errorType: 'auth',
          message: 'Client not found',
        };
        state.error = clientError;
        state.currentClient = null;
      }
    },
    logout: (state) => {
      state.currentClient = null;
      state.error = null;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      if (state.currentClient) {
        if (action.payload > state.currentClient.balance) {
          const clientError: ClientError = {
            errorType: 'withdraw',
            message: 'Insufficient funds',
          };
          state.error = clientError;
        } else {
          state.currentClient.balance -= action.payload;
        }
      }
    },
    deposit: (state, action: PayloadAction<number>) => {
      if (state.currentClient) {
        state.currentClient.balance += action.payload;
      }
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { auth, logout, withdraw, deposit, resetError } = clientSlice.actions;
export const selectClient = (state: RootState) => state.client;
export default clientSlice.reducer;
