import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { HashRouter  } from 'react-router-dom';
import './docs/lib/bootstrap/dist/css/bootstrap.min.rtl.css';
import './docs/lib/font-awesome-4.7.0/css/font-awesome.min.css';
import './docs/fonts/font-fa.css'
import './docs/css/animate.css'
import './docs/css/styles.css?v=0.0.1'
import './docs/lib/pe-icon-7-stroke/css/helper.css'
import './docs/lib/pe-icon-7-stroke/css/pe-icon-7-stroke.css'
import './docs/css/override.css'

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));