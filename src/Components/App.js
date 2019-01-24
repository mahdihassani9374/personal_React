import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import Projects from './Projects';
import Home from './Home';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div>        
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutUs" component={Projects} />
        <Route path="/projects" component={AboutUs} />
      </div>
    );
  }
}

export default App;