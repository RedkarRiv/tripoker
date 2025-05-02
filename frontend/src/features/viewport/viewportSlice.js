import { createSlice } from '@reduxjs/toolkit';

const getInitialIsMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false; // Fallback para SSR
};

const initialState = {
  isMobile: getInitialIsMobile(),
};

const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = viewportSlice.actions;
export default viewportSlice.reducer;