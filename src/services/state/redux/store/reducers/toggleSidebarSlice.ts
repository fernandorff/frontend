import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToggleSidebarState {
  value: boolean;
  width: number;
}

const initialState: ToggleSidebarState = {
  value: true,
  width: 250,
};

const toggleSidebarSlice = createSlice({
  name: 'toggle-sidebar',
  initialState,
  reducers: {
    changeToggleSidebar: (state, action: PayloadAction<ToggleSidebarState>) => {
      state.value = action.payload.value;
      state.width = action.payload.width;
    },
  },
});

export const { changeToggleSidebar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
