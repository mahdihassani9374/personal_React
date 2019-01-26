import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Projects from './Projects';
import Home from './Home';
import AboutUs from './AboutUs';
import ReactGA from 'react-ga';
import $ from 'jquery'
ReactGA.initialize('UA-123462599-1');
ReactGA.pageview(window.location.pathname + window.location.search);



class App extends Component {  
    componentDidMount() {
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
  }
  render() {
    return (
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/projects" component={Projects} />
      </div>
    );
  }
}

export default App;