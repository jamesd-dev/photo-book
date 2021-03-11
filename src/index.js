import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Font } from '@react-pdf/renderer'

Font.register({ family: 'Libre Baskerville', src: "src/libre-baskerville.ttf" });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
