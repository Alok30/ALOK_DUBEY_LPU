import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './store';

import App from './containers/app';
import  {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
console.log( 'store = ', store );
console.log( 'store = ', store.getState() );
ReactDOM.render(
   
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
       
   
, document.getElementById('root'));


