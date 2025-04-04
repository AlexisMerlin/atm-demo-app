import clientReducer, {
  auth,
  logout,
  withdraw,
  deposit,
  resetError,
  Client,
  ClientState,
} from '@/store/client.slice';

jest.mock('@/store/mockData', () => ({
  findClient: (pin: string) => {
    if (pin === '1234') {
      return {
        id: '1',
        name: 'Test Client',
        balance: 1000,
        cardType: 'VISA',
      };
    }
    throw new Error('Client not found');
  },
}));

describe('client.slice', () => {
  const initialState = { currentClient: null, error: null };

  it('should return the initial state', () => {
    expect(clientReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should authenticate a client with valid PIN', () => {
    const state = clientReducer(initialState, auth('1234'));
    expect(state.currentClient?.name).toBe('Test Client');
    expect(state.error).toBeNull();
  });

  it('should set error with invalid PIN', () => {
    const state = clientReducer(initialState, auth('0000'));
    expect(state.currentClient).toBeNull();
    expect(state.error?.errorType).toBe('auth');
  });

  it('should logout a client', () => {
    const loggedInState = {
      currentClient: { id: '1', name: 'A', balance: 100, cardType: 'VISA' as Client['cardType'] },
      error: null,
    };
    const state = clientReducer(loggedInState, logout());
    expect(state.currentClient).toBeNull();
    expect(state.error).toBeNull();
  });

  it('should withdraw money if balance is sufficient', () => {
    const state = {
      currentClient: {
        id: '1',
        name: 'Test',
        balance: 500,
        cardType: 'VISA' as Client['cardType'],
      } as Client,
      error: null,
    };
    const result = clientReducer(state, withdraw(100));
    expect(result.currentClient?.balance).toBe(400);
    expect(result.error).toBeNull();
  });

  it('should not allow withdrawal if insufficient funds', () => {
    const state = {
      currentClient: {
        id: '1',
        name: 'Test',
        balance: 50,
        cardType: 'VISA' as Client['cardType'],
      } as Client,
      error: null,
    };
    const result = clientReducer(state, withdraw(100));
    expect(result.currentClient?.balance).toBe(50);
    expect(result.error?.errorType).toBe('withdraw');
  });

  it('should deposit money', () => {
    const state = {
      currentClient: {
        id: '1',
        name: 'Test',
        balance: 200,
        cardType: 'VISA' as Client['cardType'],
      } as Client,
      error: null,
    };
    const result = clientReducer(state, deposit(100));
    expect(result.currentClient?.balance).toBe(300);
  });

  it('should reset error', () => {
    const state = {
      currentClient: null,
      error: { errorType: 'auth', message: 'Error' } as ClientState['error'],
    };
    const result = clientReducer(state, resetError());
    expect(result.error).toBeNull();
  });
});
