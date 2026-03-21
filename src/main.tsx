import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  AppGuardPage  from '../src/layouts/AppGuard.tsx';
import { startNetworkWatcher } from "../src/utils/NetworkStatusCheck";

 startNetworkWatcher();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppGuardPage>

      <App />
      
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />

    </AppGuardPage>
  </StrictMode>
);
