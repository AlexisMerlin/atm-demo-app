import uiReducer, {
  setScreenMessage,
  setUIState,
  selectMessage,
  selectButtons,
  selectButtonById,
  UiState,
} from '@/store/ui.slice';
import { ATMState } from '../atm.slice';

describe('ui.slice', () => {
  const initialState = {
    screen: { primary: 'Welcome to the ATM' },
    buttons: [
      {
        id: 'btn-8',
        label: 'Enter PIN',
        disabled: false,
        action: 'auth' as ATMState,
      },
    ],
  };
  const mockState = {
    ui: initialState,
    client: { currentClient: null, error: null },
    atm: { state: 'standby' as ATMState },
  };

  it('should return the initial state', () => {
    expect(uiReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should set screen message', () => {
    const state = uiReducer(initialState, setScreenMessage({ primary: 'New Message' }));
    expect(state.screen.primary).toBe('New Message');
  });

  it('should set UI state', () => {
    const newState: UiState = {
      screen: { primary: 'Screen Primary Text' },
      buttons: [{ id: 'btn-1', label: 'Test', disabled: false, action: 'auth' }],
    };
    const state = uiReducer(initialState, setUIState(newState));
    expect(state.screen.primary).toBe('Screen Primary Text');
    expect(state.buttons.length).toBe(1);
  });

  it('should select screen message', () => {
    expect(selectMessage(mockState)).toEqual(initialState.screen);
  });

  it('should select buttons', () => {
    expect(selectButtons(mockState)).toEqual(initialState.buttons);
  });

  it('should select button by ID', () => {
    const selector = selectButtonById('btn-8');
    expect(selector(mockState)).toEqual(initialState.buttons[0]);
  });
});
