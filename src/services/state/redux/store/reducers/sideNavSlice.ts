import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isCollapsed: false,
};

const SideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    toggleSideNavCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    setSideNavStateCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isCollapsed = action.payload;
    },
  },
});

export default SideNavSlice.reducer;

export const { toggleSideNavCollapsed, setSideNavStateCollapsed } =
  SideNavSlice.actions;
