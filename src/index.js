import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './AppWrapper.js';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './store/Store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   

       <AppWrapper  /> 

  </Provider>
   
  
);

reportWebVitals();
