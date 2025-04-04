import atmReducer, {
  setAtmState,
  selectAtmState,
  isAtmInputState,
  ATMState,
} from '@/store/atm.slice';

describe('atm.slice', () => {
  const initialState = { state: 'standby' as ATMState };

  it('should return the initial state', () => {
    expect(atmReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle setAtmState', () => {
    const nextState = atmReducer(initialState, setAtmState('auth'));
    expect(nextState.state).toBe('auth');
  });

  it('should select atm state', () => {
    const mockState = { atm: { state: 'withdraw' as ATMState } };
    expect(selectAtmState(mockState)).toBe('withdraw');
  });

  it('should identify input states', () => {
    expect(isAtmInputState({ atm: { state: 'auth' } })).toBe(true);
    expect(isAtmInputState({ atm: { state: 'deposit' } })).toBe(true);
    expect(isAtmInputState({ atm: { state: 'waiting' } })).toBe(false);
  });
});
