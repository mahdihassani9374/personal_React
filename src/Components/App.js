import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Projects from './Projects';
import Home from './Home';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import $ from 'jquery'
import ReactGA from 'react-ga';
// import axios from 'axios';
// import { loadProgressBar } from 'axios-progress-bar'
// import 'axios-progress-bar/dist/nprogress.css'

ReactGA.initialize('UA-123462599-1');
 ReactGA.pageview(window.location.pathname + window.location.search);



class App extends Component {  

    state = {
      loading : true 
    }
    componentDidMount() {     
       //loadProgressBar()
       $(window).scroll(function(){           
           scroll_menu()
         });
        scroll_menu();

       function scroll_menu() {
           var scroll = $(window).scrollTop();
           if(scroll > 58) {
             $('.navbar.navbar-inverse').addClass('navbar-scroll');
           }
           else {
             $('.navbar.navbar-inverse').removeClass('navbar-scroll');
           }
       }

       setTimeout(() => {
         this.setState({loading:false}) 
       }, 1500);   
  }
  render() {
    return (
      <div>
        {
          this.state.loading ? <div className="loading">
              <div className="loading-spin"></div>
          </div> : ''
        }      
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/projects" component={Projects} />
        <Route path="/gallery" component={Gallery} />
      </div>
    );
  }
}

export default App;