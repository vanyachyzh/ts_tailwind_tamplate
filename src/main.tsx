import { PrivyProvider } from '@privy-io/react-auth';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App.tsx';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivyProvider
      appId={process.env.PRIVY_APP_ID || ''}
      config={{
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </PrivyProvider>
  </React.StrictMode>,
);
