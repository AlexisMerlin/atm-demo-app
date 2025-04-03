import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findClient } from './mockData';
import { EnumCardType } from '@/types/EnumCardType';
export interface Client {
  id: string;
  name: string;
  balance: number;
  cardType: EnumCardType;
}

export interface ClientState {
  currentClient: Client | null;
  error: string | null;
}

export const initialState: ClientState = {
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
        state.error = (error as Error).message;
      }
    },
  },
});

export const {} = clientSlice.actions;
export const selectError = (state: ClientState) => state.error;
export const selectClient = (state: ClientState) => state.currentClient;
export default clientSlice.reducer;
