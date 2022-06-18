import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './components/Router';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
);
