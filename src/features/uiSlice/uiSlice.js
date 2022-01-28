import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: { dropdownIsVisible: false },
  reducers: {
    toggle(state) {
      state.dropdownIsVisible = !state.dropdownIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
