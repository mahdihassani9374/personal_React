import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header1 extends Component {
    render() {
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
                                <li><NavLink to="./projects"> نمونه کارها </NavLink></li>
                                <li><NavLink to="./aboutUs">درباره ما</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="header__section header__section-custom">
                    <h1 className="header__section__title wow bounceInUp">درباره ما - مهدی
                    مبین حسنی </h1>
                    <div className="mt-20 wow bounceInDown">
                        <i className="pe-7s-user font-size-50"></i>
                    </div>
                </section>

            </header>
        );
    }
}

export default Header1;