import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Theme, ThemePanel } from '@radix-ui/themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor='blue' grayColor='gray' >

      <App />
      <div className="hidden">
        <ThemePanel />
      </div>

    </Theme>
  </React.StrictMode>,
);
