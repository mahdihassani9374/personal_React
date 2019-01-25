import React, { Component } from 'react';
import Header1 from './Header1';
import About from './About';
import Footer from './Footer';

class AboutUs extends Component {
    render() {
        return (
            <div>
               <Header1 icon="pe-7s-user"> درباره ما  - مهدی مبین حسنی </Header1>
               <About />
               <Footer />
            </div>
        );
    }
}

export default AboutUs;