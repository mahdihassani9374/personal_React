import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
// css link 
import './docs/lib/bootstrap/dist/css/bootstrap.min.rtl.css';
import './docs/lib/font-awesome-4.7.0/css/font-awesome.min.css';
// import './docs/lib/slick-master/slick/slick-theme.css'
// import './docs/lib/slick-master/slick/slick.css'
import './docs/fonts/font-fa.css'
import './docs/css/animate.css'
import './docs/css/styles.css?v=0.0.1'
import './docs/lib/pe-icon-7-stroke/css/helper.css'
import './docs/lib/pe-icon-7-stroke/css/pe-icon-7-stroke.css'

// js link 

//import './docs/lib/jquery-3.1.1/jquery-3.1.1.min'
// import './docs/lib/bootstrap/bootstrap.min'
// import './docs/lib/slick-master/slick/slick.min'
// import './docs/js/wow.min'
// import './docs/lib/stick/jquery.easing.min'
// import './docs/lib/stick/jquery.easy-ticker.min'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));