// Imports
// ========================================================
import React from 'react';
import ReactDOM from 'react-dom';

// Providers
import RootProvider from './providers';

// Router
import RootRouter from './routers';

// CSS
import './index.css';

// Main Render
// ========================================================
ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <RootRouter />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
