import React, { Component } from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    render() {
        return (
            <div>
               <Header1 icon="pe-7s-diamond">پروژه ها - مهدی مبین حسنی </Header1>
               <ProjectItem />
               <Footer />
            </div>
        );
    }
}

export default Projects;