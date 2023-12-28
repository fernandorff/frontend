import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorageToken } from '@/hooks/token/useLocalStorageToken';

interface TokenState {
  value: string | null;
}

const token = useLocalStorageToken();

const initialState: TokenState = {
  value: token,
};

const tokenSlice = createSlice({
  name: 'toggle-sidebar',
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = null;
    },
  },
});

export const { changeToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
