'use client';

import { auth, selectClient } from '@/store/client.slice';
import { setScreenMessage } from '@/store/screen.slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function InputPin() {
  const [pin, setPin] = useState('');
  const clientState = useSelector(selectClient);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clientState.error) {
      dispatch(setScreenMessage(clientState.error));
    }
    if (clientState.currentClient) {
      dispatch(setScreenMessage(`Hi ${clientState.currentClient.name}! Please select a choice...`));
    }
  }, [clientState, dispatch]);

  function handleAuthClient() {
    if (pin) {
      dispatch(auth(pin));
      setPin('');
    }
  }
  return (
    <div className='relative z-50 flex w-full justify-center gap-1'>
      <input
        className='rounded-10 w-20 bg-slate-100'
        type='text'
        placeholder='PIN'
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button onClick={handleAuthClient}>✔️</button>
    </div>
  );
}
