import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/store';
import './index.css';
import App from './App.jsx';
import { io } from 'socket.io-client';

/* const API_URL = import.meta.env.VITE_API_URL;
const socket = io(API_URL);

socket.on('connect', () => {
  console.log('Connected to server');
}); */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);