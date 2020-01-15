import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'jquery';
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/normalize.css';
import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));

