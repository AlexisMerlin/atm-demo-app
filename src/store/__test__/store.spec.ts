import { store } from '@/store/store';
import { setAtmState } from '@/store/atm.slice';
import { selectMessage } from '@/store/ui.slice';

describe('Redux store integration', () => {
  it('should update UI state via middleware when ATM state changes', () => {
    store.dispatch(setAtmState('auth'));
    const screen = selectMessage(store.getState());
    expect(screen.primary).toBe('Please enter your PIN');
  });

  it('should respond to ATM action "waiting"', () => {
    store.dispatch(setAtmState('waiting'));
    const screen = selectMessage(store.getState());
    expect(screen.primary).toBe('Welcome');
  });
});
