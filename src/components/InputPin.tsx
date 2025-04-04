'use client';

import { isAtmInputState, selectAtmState, setAtmState } from '@/store/atm.slice';
import { auth, deposit, logout, resetError, selectClient, withdraw } from '@/store/client.slice';
import { setScreenMessage } from '@/store/ui.slice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function InputPin() {
  const [clientInput, setClientInput] = useState('');
  const balanceRef = useRef(0);
  const clientState = useSelector(selectClient);
  const isReadyForInput = useSelector(isAtmInputState);
  const dispatch = useDispatch();

  const atmState = useSelector(selectAtmState);

  useEffect(() => {
    if (atmState === 'auth') {
      if (clientState.error) {
        dispatch(setScreenMessage(clientState.error.message));
      }
      if (clientState.currentClient) {
        balanceRef.current = clientState.currentClient.balance;
        dispatch(setAtmState('waiting'));
      }
    }

    if (atmState === 'standby') {
      dispatch(logout());
    }

    if (atmState === 'waiting') {
      if (clientState.currentClient) {
        dispatch(resetError());
        dispatch(
          setScreenMessage(`Hi ${clientState.currentClient.name}! Please select a choice...`),
        );
      }
    }

    if (atmState === 'balance') {
      if (clientState.currentClient) {
        dispatch(
          setScreenMessage(
            `Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
          ),
        );
      }
    }

    if (atmState === 'withdraw') {
      if (clientState.error?.errorType === 'withdraw') {
        dispatch(setScreenMessage(clientState.error.message));
      }
      if (clientState.currentClient && clientState.currentClient.balance !== balanceRef.current) {
        dispatch(
          setScreenMessage(
            `Take you Cash! Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
          ),
        );
        balanceRef.current = clientState.currentClient.balance;
      }
    }

    if (atmState === 'deposit') {
      if (clientState.currentClient && clientState.currentClient.balance !== balanceRef.current) {
        dispatch(
          setScreenMessage(
            `Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
          ),
        );
        balanceRef.current = clientState.currentClient.balance;
      }
    }
  }, [clientState, dispatch, atmState]);

  function handleAuthClient() {
    if (atmState === 'auth' && clientInput) {
      dispatch(auth(clientInput));
      setClientInput('');
    }

    if (atmState === 'withdraw' && clientInput) {
      const amount = parseFloat(clientInput);
      dispatch(withdraw(amount));
      setClientInput('');
    }

    if (atmState === 'deposit' && clientInput) {
      const amount = parseFloat(clientInput);
      dispatch(deposit(amount));
      setClientInput('');
    }
  }
  return (
    <div className='relative z-50 flex w-full justify-center gap-1'>
      <input
        disabled={!isReadyForInput}
        className='rounded-10 w-20 bg-slate-100'
        type='text'
        placeholder='PIN'
        value={clientInput}
        onChange={(e) => setClientInput(e.target.value)}
      />
      <button onClick={handleAuthClient} disabled={!isReadyForInput}>
        ✔️
      </button>
    </div>
  );
}
