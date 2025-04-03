import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findClient } from './mockData';
import { EnumCardType } from '@/types/EnumCardType';
import { RootState } from './store';
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
        console.log(`Client Found ${JSON.stringify(client)}`);
        state.currentClient = client;
      } catch (error) {
        console.log(`Error ${error}`);
        state.error = (error as Error).message;
        state.currentClient = null;
      }
    },
  },
});

export const { auth } = clientSlice.actions;
//export const selectError = (state: RootState) => state.client.error;
export const selectClient = (state: RootState) => state.client;
export default clientSlice.reducer;
