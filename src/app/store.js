import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import uiSlice from '../features/uiSlice/uiSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    counter: counterReducer,
  },
});
export default store;
