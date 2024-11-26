import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const json = document.getElementById('frontend-config');

if (json !== null) {
  const config = JSON.parse(json.innerHTML);
  root.render(<App config={config} />);
}
