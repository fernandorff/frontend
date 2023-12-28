import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AlertsState {
  value: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
}

const initialState: AlertsState = {
  value: false,
  message: '',
  severity: 'success',
};

const AlertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    changeAlertsStates: (state, action: PayloadAction<AlertsState>) => {
      state.value = action.payload.value;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
  },
});

export const { changeAlertsStates } = AlertsSlice.actions;

export default AlertsSlice.reducer;
