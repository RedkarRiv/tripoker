import { store } from '@store/store.js'

export const getAuthToken = () => {
  const state = store.getState();
  return state.auth.token;
} 