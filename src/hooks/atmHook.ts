import { isAtmInputState, selectAtmState, setAtmState } from '@/store/atm.slice';
import { auth, deposit, logout, resetError, selectClient, withdraw } from '@/store/client.slice';
import { setScreenMessage } from '@/store/ui.slice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useATM() {
  const [clientInput, setClientInput] = useState<string>('');
  const balanceRef = useRef(0);
  const clientState = useSelector(selectClient);
  const isReadyForInput = useSelector(isAtmInputState);
  const atmState = useSelector(selectAtmState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (atmState === 'auth') {
      dispatch(
        setScreenMessage({
          primary: 'Please enter your PIN',
          secondary: clientInput.split('').join(' '),
        }),
      );
    }

    if (atmState === 'withdraw') {
      dispatch(
        setScreenMessage({
          primary: 'Enter amount to withdraw',
          secondary: clientInput ? `$ ${(parseFloat(clientInput) / 100).toFixed(2)}` : '$ 0.00',
        }),
      );
    }

    if (atmState === 'deposit') {
      dispatch(
        setScreenMessage({
          primary: 'Enter amount to deposit',
          secondary: clientInput ? `$ ${(parseFloat(clientInput) / 100).toFixed(2)}` : '$ 0.00',
        }),
      );
    }
  }, [clientInput, atmState, dispatch]);

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

  function handleConfirm() {
    if (atmState === 'auth' && clientInput) {
      dispatch(auth(clientInput));
      setClientInput('');
    }

    if (atmState === 'withdraw' && clientInput) {
      const amount = parseFloat(clientInput) / 100;
      dispatch(withdraw(amount));
      setClientInput('');
    }

    if (atmState === 'deposit' && clientInput) {
      const amount = parseFloat(clientInput) / 100;
      dispatch(deposit(amount));
      setClientInput('');
    }
  }

  function handleClearInput() {
    setClientInput('');
  }

  return { isReadyForInput, clientInput, setClientInput, handleConfirm, handleClearInput };
}
