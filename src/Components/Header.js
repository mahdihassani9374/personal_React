import React, { Component } from 'react';
import NavItem  from './NavItem'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <NavItem to="/">home</NavItem>
                        <NavItem to="/projects">projects</NavItem>
                        <NavItem to="/aboutUs">aboutUs</NavItem>                      
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;