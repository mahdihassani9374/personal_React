import React, { Component } from 'react';
import Header from './Header';
import Service from './Services';
import Bg from './Bg';
import Footer from './Footer';
import ProjectItem from './ProjectItem';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />  
                <Service />   
                <Bg />  
                <ProjectItem />  
                <Footer />
            </div>
        );
    }
}

export default Home;