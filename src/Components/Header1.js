import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactWOW from 'react-wow'

class Header1 extends Component {
    render() {
        let { children, icon } = this.props;
        return (
            <header className="header header-custom">
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/" exact={true}>صفحه اصلی</NavLink></li>
                                <li><NavLink to="/projects"> نمونه کارها </NavLink></li>
                                <li><NavLink to="/aboutUs">درباره ما</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">                        
                                <li><NavLink to="/gallery">گالری عکس</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="header__section header__section-custom">
                    <ReactWOW animation='bounceInUp'>
                        <h1 className="header__section__title">{children}</h1>
                    </ReactWOW>
                    <ReactWOW animation='bounceInDown'>
                        <div className="mt-20">
                            <i className={icon} style={{ fontSize: '50px' }}></i>
                        </div>
                    </ReactWOW>
                </section>
            </header>
        );
    }
}

export default Header1;