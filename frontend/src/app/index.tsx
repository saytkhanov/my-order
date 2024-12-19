import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { StoreProvider } from './providers/StoreProvider';
import { SocketProvider } from './providers/SocketProvider';
import '../shared/assets/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </StoreProvider>
  </StrictMode>
);
