import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <App />
    </BrowserRouter>
 
);