import { isAtmInputState, selectAtmState, setAtmState } from '@/store/atm.slice';
import { auth, deposit, logout, resetError, selectClient, withdraw } from '@/store/client.slice';
import { setScreenMessage } from '@/store/ui.slice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useATM() {
  const [clientInput, setClientInput] = useState('');
  const balanceRef = useRef(0);
  const clientState = useSelector(selectClient);
  const isReadyForInput = useSelector(isAtmInputState);
  const dispatch = useDispatch();

  const atmState = useSelector(selectAtmState);
  useEffect(() => {
    if (atmState === 'auth') {
      if (clientState.error) {
        dispatch(setScreenMessage({ primary: clientState.error.message }));
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
          setScreenMessage({
            primary: `Hi ${clientState.currentClient.name}!`,
            secondary: 'Please select a choice...',
          }),
        );
      }
    }

    if (atmState === 'balance') {
      if (clientState.currentClient) {
        dispatch(
          setScreenMessage({
            primary: `Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
          }),
        );
      }
    }

    if (atmState === 'withdraw') {
      if (clientState.error?.errorType === 'withdraw') {
        dispatch(
          setScreenMessage({
            primary: clientState.error.message,
            secondary: 'Please try again...',
          }),
        );
      }
      if (clientState.currentClient && clientState.currentClient.balance !== balanceRef.current) {
        dispatch(
          setScreenMessage({
            primary: 'Take you Cash!',
            secondary: `Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
          }),
        );
        balanceRef.current = clientState.currentClient.balance;
      }
    }

    if (atmState === 'deposit') {
      if (clientState.currentClient && clientState.currentClient.balance !== balanceRef.current) {
        dispatch(
          setScreenMessage({
            primary: `Your current balance is: $${clientState.currentClient.balance.toFixed(2)}`,
          }),
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

  function handleClearInput() {
    setClientInput('');
  }

  return { isReadyForInput, clientInput, setClientInput, handleAuthClient, handleClearInput };
}
