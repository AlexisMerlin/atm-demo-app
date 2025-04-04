import { configureStore } from '@reduxjs/toolkit';
import atmReducer, { setAtmState, ATMState } from '@/store/atm.slice';
import uiReducer from '@/store/ui.slice';
import { uiListenerMiddleware, uiStateByATMState } from '@/store/uiMiddleware';

describe('uiListenerMiddleware', () => {
  const makeTestStore = () =>
    configureStore({
      reducer: {
        atm: atmReducer,
        ui: uiReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(uiListenerMiddleware.middleware),
    });

  it.each(Object.entries(uiStateByATMState))(
    'should update UI correctly when ATM state is "%s"',
    async (atmState, expectedUI) => {
      const store = makeTestStore();

      store.dispatch(setAtmState(atmState as ATMState));

      const uiState = store.getState().ui;

      expect(uiState.screen.primary).toBe(expectedUI.screen.primary);
      expect(uiState.buttons).toEqual(expectedUI.buttons);
    },
  );
});
