import React, { Component } from 'react';
import Header from './Header';
import Service from './Services';
import Bg from './Bg';
import Bg1 from './Bg1';
import Footer from './Footer';
import ProjectItem from './ProjectItem';
import About from './About';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />  
                <Service /> 
                <Bg />  
                <ProjectItem /> 
                <Bg1 /> 
                <About />
                <Footer /> 
            </div>
        );
    }
}

export default Home;