'use client';

import { isAtmInputState, selectAtmState, setAtmState } from '@/store/atm.slice';
import { auth, selectClient } from '@/store/client.slice';
import { setScreenMessage } from '@/store/ui.slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function InputPin() {
  const [clientInput, setClientInput] = useState('');
  const clientState = useSelector(selectClient);
  const isReadyForInput = useSelector(isAtmInputState);
  const dispatch = useDispatch();

  const atmState = useSelector(selectAtmState);

  useEffect(() => {
    if (clientState.currentClient && atmState === 'balance') {
      dispatch(
        setScreenMessage(
          `Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
        ),
      );
    }

    if (clientState.currentClient && atmState === 'waiting') {
      dispatch(setScreenMessage(`Hi ${clientState.currentClient.name}! Please select a choice...`));
    }
  }, [clientState, dispatch, atmState]);

  useEffect(() => {
    if (clientState.error) {
      dispatch(setScreenMessage(clientState.error));
    }
    if (clientState.currentClient) {
      dispatch(setAtmState('waiting'));
    }
  }, [clientState, dispatch]);

  function handleAuthClient() {
    if (clientInput) {
      dispatch(auth(clientInput));
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
