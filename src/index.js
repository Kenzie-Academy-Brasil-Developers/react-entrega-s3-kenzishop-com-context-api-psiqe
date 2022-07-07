import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Providers } from './Providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Providers >
      <React.StrictMode>
      <GlobalStyle/>
      <ToastContainer position="top-center"/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
   </Providers>
);